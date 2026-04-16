/**
 * local server entry file, for local development
 */
import app from './app.js';

/**
 * start server with port
 */
const BASE_PORT = Number(process.env.PORT ?? 3003);
const MAX_TRY_COUNT = Number(process.env.PORT_TRY_COUNT ?? 10);
const MAX_PORT = BASE_PORT + MAX_TRY_COUNT;

const startServer = (port: number) => {
  const next = app.listen(port, () => {
    console.log(`Server ready on port ${port}`);
  });

  next.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
      const nextPort = port + 1;
      if (nextPort <= MAX_PORT) {
        console.log(`Port ${port} is in use, trying ${nextPort}...`);
        setTimeout(() => {
          server = startServer(nextPort);
        }, 80);
        return;
      }
    }
    throw err;
  });

  return next;
};

let server = startServer(BASE_PORT);

/**
 * close server
 */
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received');
  try {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  } catch {
    process.exit(0);
  }
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received');
  try {
    server.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  } catch {
    process.exit(0);
  }
});

export default app;
