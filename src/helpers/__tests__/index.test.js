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

});

describe('multiply', () => {

});

describe('personMaker', () => {

});
