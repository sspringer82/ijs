export function transformDataset(data) {
  // Pretend we have costly transformations
  return data
    .map((rec) => {
      const avg = rec.values.reduce((a, b) => a + b, 0) / rec.values.length;
      return {
        ...rec,
        score: Math.tanh(avg * 3) * 100,
        summary: `${rec.name}:${avg.toFixed(3)}`,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.ceil(data.length * 0.1)); // top 10%
}

// ESM export above
