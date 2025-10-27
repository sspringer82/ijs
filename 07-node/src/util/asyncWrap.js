// Wrap async handlers to forward errors to Express error middleware
export function asyncWrap(handler) {
  return function wrapped(req, res, next) {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
}

// ESM export above
