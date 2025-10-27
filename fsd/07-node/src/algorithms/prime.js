// Simple (inefficient) prime sieve for CPU stress
export function computePrimes(limit) {
  const primes = [];
  for (let n = 2; n <= limit; n++) {
    let isPrime = true;
    const sqrt = Math.sqrt(n);
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(n);
  }
  return primes;
}

// ESM export above
