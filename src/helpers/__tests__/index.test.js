import * as helpers from '../index';

describe('five', () => {
  // this is the test (you can use "test" instead of "it")
  // THIS IS A SINGLE TEST
  it('returns 5', () => {
    // CONTAINING TWO ASSERTIONS
    expect(helpers.five()).toBe(5);
    expect(helpers.five(8)).toBe(5);
  });
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {

});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: 'ace72b9d-034a-43eb-8eee-119cee80a86b',
        name: 'peter',
        age: 4,
      });
  });
});
