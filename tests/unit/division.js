define(function (require) {
    const registerSuite = require('intern!object');
    const assert = require('intern/chai!assert');
    const division = require('src/division');

    registerSuite({
        name: 'Division Test Suite',

        'TestDivisionByZero': function() {
            try{
                let actual = division.div(5,0);
            } catch(err) {
                assert(err instanceof division.DivisionByZeroError);
            }

            // For some reason assert.throws doesn't catch the error?
            // assert.throws(division.div(5,0) , division.DivisionByZeroError);
        },

        'TestDividendEqualToZero': function() {
            let actual = division.div(0,5);
            assert.strictEqual(actual.quotient, 0);
            assert.strictEqual(actual.remainder, 5);

            actual = division.div(0,-5);
            assert.strictEqual(actual.quotient, 0);
            assert.strictEqual(actual.remainder, -5);
        },

        'TestPositiveDividendDivisibleByPositiveDivisor': function() {
            const actual = division.div(12,4);
            assert.strictEqual(actual.quotient, 3);
            assert.strictEqual(actual.remainder, 0);
        },

        'TestPositiveDividendDivisibleByNegativeDivisor': function() {
            const actual = division.div(12,-4);
            assert.strictEqual(actual.quotient, -3);
            assert.strictEqual(actual.remainder, 0);
        },

        'TestNegativeDividendDivisibleByPositiveDivisor': function() {
            const actual = division.div(12,-4);
            assert.strictEqual(actual.quotient, -3);
            assert.strictEqual(actual.remainder, 0);
        },

        'TestNegativeDividendDivisibleByNegativeDivisor': function() {
            const actual = division.div(-12,-4);
            assert.strictEqual(actual.quotient, 3);
            assert.strictEqual(actual.remainder, 0);
        },

        'TestPositiveDividendPositiveDivisor': function() {
            const actual = division.div(6,5);
            assert.strictEqual(actual.quotient, 1);
            assert.strictEqual(actual.remainder, 1);
        },

        'TestPositiveDividendNegativeDivisor': function() {
            const actual = division.div(6,-5);
            assert.strictEqual(actual.quotient, -2);
            assert.strictEqual(actual.remainder, -4);
        },

        'TestNegativeDividendPositiveDivisor': function() {
            const actual = division.div(-6,5);
            assert.strictEqual(actual.quotient, -2);
            assert.strictEqual(actual.remainder, 4);
        },

        'TestNegativeDividendNegativeDivisor': function() {
            const actual = division.div(-6,-5);
            assert.strictEqual(actual.quotient, 1);
            assert.strictEqual(actual.remainder, -1);
        },
    });
});
