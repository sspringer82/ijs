export function generateSyntheticDataset(size) {
  const data = new Array(size);
  for (let i = 0; i < size; i++) {
    data[i] = {
      id: i,
      name: 'Item_' + i,
      values: [Math.random(), Math.random(), Math.random()],
      tags: ['alpha', 'beta', 'gamma'][i % 3],
      createdAt: Date.now() - Math.floor(Math.random() * 1e9),
    };
  }
  return data;
}

// ESM export above
