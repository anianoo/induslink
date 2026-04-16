import { Router, type Request, type Response } from 'express'
import crypto from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const router = Router()

type ContactMessageInput = {
  name: string
  company?: string
  phone: string
  email?: string
  message: string
  sourcePage?: string
}

const rateState = new Map<string, { count: number; resetAt: number }>()

function getClientIp(req: Request) {
  const xff = req.headers['x-forwarded-for']
  if (typeof xff === 'string' && xff.trim()) return xff.split(',')[0].trim()
  return req.ip || 'unknown'
}

function sha256(input: string) {
  return crypto.createHash('sha256').update(input).digest('hex')
}

function validateBody(body: unknown): { ok: true; value: ContactMessageInput } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid body' }
  const b = body as Record<string, unknown>
  const name = String(b.name ?? '').trim()
  const phone = String(b.phone ?? '').trim()
  const message = String(b.message ?? '').trim()
  const company = String(b.company ?? '').trim()
  const email = String(b.email ?? '').trim()
  const sourcePage = String(b.sourcePage ?? '').trim()

  if (name.length < 2 || name.length > 50) return { ok: false, error: 'Invalid name' }
  if (phone.length < 6 || phone.length > 30) return { ok: false, error: 'Invalid phone' }
  if (message.length < 10 || message.length > 2000) return { ok: false, error: 'Invalid message' }
  if (company.length > 80) return { ok: false, error: 'Invalid company' }
  if (email.length > 120) return { ok: false, error: 'Invalid email' }
  if (sourcePage.length > 200) return { ok: false, error: 'Invalid sourcePage' }

  return {
    ok: true,
    value: {
      name,
      phone,
      message,
      company: company || undefined,
      email: email || undefined,
      sourcePage: sourcePage || undefined,
    },
  }
}

async function appendJsonl(filePath: string, data: unknown) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.appendFile(filePath, `${JSON.stringify(data)}\n`, 'utf8')
}

router.post('/', async (req: Request, res: Response) => {
  const now = Date.now()
  const ipHash = sha256(getClientIp(req))
  const key = `contact:${ipHash}`
  const state = rateState.get(key)
  const windowMs = 10 * 60 * 1000
  const limit = 5

  if (!state || state.resetAt <= now) {
    rateState.set(key, { count: 1, resetAt: now + windowMs })
  } else {
    state.count += 1
    if (state.count > limit) {
      return res.status(429).json({ ok: false, error: 'Too many requests' })
    }
  }

  const v = validateBody(req.body)
  if (v.ok === false) return res.status(400).json({ ok: false, error: v.error })

  const id = crypto.randomUUID()
  const record = {
    id,
    createdAt: new Date().toISOString(),
    ipHash,
    ...v.value,
  }
  await appendJsonl(path.join(process.cwd(), 'api', 'data', 'contact_messages.jsonl'), record)

  return res.status(200).json({ ok: true, id })
})

export default router

