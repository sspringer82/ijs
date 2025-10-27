import express from 'express';
import { asyncWrap } from '../util/asyncWrap.js';
import { handleCpuIntensive } from '../controllers/cpuController.js';
import { handleMemoryIntensive } from '../controllers/memoryController.js';
import { handleMemoryLeak } from '../controllers/leakController.js';

const router = express.Router();

router.get('/cpu-intensive', asyncWrap(handleCpuIntensive));
router.get('/memory-intensive', asyncWrap(handleMemoryIntensive));
router.get('/leak', asyncWrap(handleMemoryLeak));

export const performanceRouter = router;
