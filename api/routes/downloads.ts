import { Router, type Request, type Response } from 'express'
import crypto from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const router = Router()

type DownloadEventInput = {
  fileId: string
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

function validateBody(body: unknown): { ok: true; value: DownloadEventInput } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid body' }
  const b = body as Record<string, unknown>
  const fileId = String(b.fileId ?? '').trim()
  const sourcePage = String(b.sourcePage ?? '').trim()
  if (!fileId || fileId.length > 120) return { ok: false, error: 'Invalid fileId' }
  if (sourcePage.length > 200) return { ok: false, error: 'Invalid sourcePage' }
  return { ok: true, value: { fileId, sourcePage: sourcePage || undefined } }
}

async function appendJsonl(filePath: string, data: unknown) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
  await fs.appendFile(filePath, `${JSON.stringify(data)}\n`, 'utf8')
}

router.post('/track', async (req: Request, res: Response) => {
  const now = Date.now()
  const ipHash = sha256(getClientIp(req))
  const key = `download:${ipHash}`
  const state = rateState.get(key)
  const windowMs = 5 * 60 * 1000
  const limit = 30

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
  await appendJsonl(path.join(process.cwd(), 'api', 'data', 'download_events.jsonl'), record)
  return res.status(200).json({ ok: true, id })
})

export default router

