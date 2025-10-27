import crypto from 'crypto';

export function iterativeHash(records, rounds) {
  let hash = crypto.createHash('sha256').update('seed').digest('hex');
  for (let r = 0; r < rounds; r++) {
    const chunk = records[r % records.length];
    hash = crypto
      .createHash('sha256')
      .update(hash + JSON.stringify(chunk))
      .digest('hex');
  }
  return hash;
}

// ESM export above
