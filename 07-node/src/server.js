import express from 'express';
import { performanceRouter } from './routes/performance.js';
import { config } from './util/config.js';

export function buildApp() {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  app.use('/perf', performanceRouter);

  app.use((err, req, res, next) => {
    console.error('Error:', err);
    res
      .status(500)
      .json({ error: 'Internal Server Error', detail: err.message });
  });

  return app;
}

export function start() {
  const app = buildApp();
  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
}
