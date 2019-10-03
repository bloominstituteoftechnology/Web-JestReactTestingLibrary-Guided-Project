import uuid from 'uuid';

export function five() {
  return 5;
}

export function sum(a, b) {
  if (arguments.length < 2) return null;
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('numbers required');
  }
  return a + b;
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
