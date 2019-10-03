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
});

describe('multiply', () => {

});

describe('personMaker', () => {

});
