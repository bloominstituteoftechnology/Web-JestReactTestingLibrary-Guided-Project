import * as helpers from '../index';

describe('five', () => {
  // this is the test (you can use "test" instead of "it")
  it('returns 5', () => {
    // this is just preparation
    const expectedOutput = 5;
    const actualOutput = helpers.five();

    // this is the assertion, we can have several
    // as long as all assertions test THE ONE THING
    expect(actualOutput).toBe(expectedOutput);
  });
});

describe('sum', () => {

});

describe('multiply', () => {

});

describe('personMaker', () => {

});
