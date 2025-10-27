export const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 4000,
  cpu: {
    dataSize: 25_000, // number of synthetic records
    primeLimit: 50_000, // upper bound for prime calculation
    hashRounds: 2500, // number of hashing iterations
  },
  memory: {
    objects: 50_000, // objects to allocate
    nestedDepth: 5,
  },
  leak: {
    chunkSize: 5_000, // objects added per call
    timerIntervalMs: 5000, // background growth
  },
};

// ESM export above
