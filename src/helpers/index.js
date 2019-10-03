import uuid from 'uuid';

export function five() {
  return 5;
}

// product guy
// the sum function needs to support ANY number
// of arguments (at least two)
export function sum(...numbers) {
  const enoughArgs = numbers.length > 1;
  if (!enoughArgs) return null;

  const somethingNotNumber = numbers.some(number => {
    return typeof number !== 'number';
  });

  if (somethingNotNumber) {
    throw new Error('I want numbers');
  }

  return numbers.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  });
}

export function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('numbers required');
  }
  return a * b;
}

export function personMaker(name, age) {
  return {
    id: uuid(),
    name,
    age,
  };
}
