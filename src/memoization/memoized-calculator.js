const cache = new Map();

function calculate(a, b, operation) {
  const key = `${a},${b},${operation}`;

  if (cache.has(key)) {
    return cache.get(key);
  }

  let result;

  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      if (b === 0) {
        return undefined;
      }
      result = a / b;
      break;
    default:
      return undefined;
  }

  cache.set(key, result);

  return result
}

console.log(calculate(3, 4, 'add'));
console.log(calculate(3, 4, 'add'));
console.log(calculate(3, 4, 'multiply'));
console.log(calculate(3, 4, 'multiply'));