const expect = require('chai').expect;

const add = require('../calculator.js').add;
const multiply = require('../calculator.js').multiply;

describe('calculator tests', () => {
  it('should add two numbers', function () {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});
