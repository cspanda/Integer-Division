/* For use in intern. Intern expects the AMD style of modules */
if (typeof define !== 'function') { var define = require('amdefine')(module) }

define(function(require, exports, module) {
    /**
     * Checks whether two numbers are of the same sign (both positive or both negative)
     * @param{number} num1
     * @param{number} num2
     * @return{boolean}
     */
    const isSameSign = (num1, num2) => {
        return num1 >= 0 && num2 >= 0 || num1 < 0 && num2 < 0;
    };

    /**
     * Returns absolute value of a number. Shorter to write abs than Math.abs
     * @param{number} number
     * @return{number}
     */
    const abs = number => Math.abs(number);

    /**
     * Returns the floor of a number. Shorter to write floor than Math.floor
     * @param{number} number
     * @return{number}
     */
    const floor = number => Math.floor(number);


    /**
     * Custom Error Object for Division by Zero, derives from base Error object
     * @param{string} message
     */
    function DivisionByZeroError(message) {
      this.name = 'DivisionByZeroError';
      this.message = message || 'Division by zero error.';
      this.stack = (new Error()).stack;
    }
    DivisionByZeroError.prototype = Object.create(Error.prototype);
    DivisionByZeroError.prototype.constructor = DivisionByZeroError;


    /**
     * Given a dividend (numerator) and a divisor (denominator), returns the quotient
     * and remainder. Uses binary search to determine the appropriate quotient.
     * Returns an object with quotient and remainder properties.
     * @param{number} numerator
     * @param{number} denominator
     * @return{object}
     */
    const div = (numerator, denominator) => {

        /* Throw an error if divisor is 0.
           If divident is equal to 0, then return an object with quotient 0 and
           remainder equal to the divisor.
        */
        if(denominator === 0) {
            throw new DivisionByZeroError();
        } else if(numerator === 0) {
            return {
                quotient: 0,
                remainder: denominator
            };
        }

        /* Create an array listOfPossibleQuotients that represents the range of
           possible quotients to iterato through (1 to abs(dividend)). If dividend
           and divisor are of the same sign, then the quotient must be positive;
           else the quotient is negative.
        */
        let listOfPossibleQuotients;
        if(isSameSign(numerator, denominator)) {
            listOfPossibleQuotients = [...Array(abs(numerator)+1).keys()];
        } else {
            listOfPossibleQuotients = [...Array(abs(numerator)+1).keys()].map(item => -item);
        }

        while(true) {

            /* Get the middle element in the array, use as a sample "quotient" */
            const median = listOfPossibleQuotients[floor(listOfPossibleQuotients.length/2)];
            /* Get the remainder of the calculation dividend - median*divisor */
            const remainder = numerator - denominator*median;

            /* If the remainder is 0, then the divisor divides evenly into the
               dividend, so return the results.

               Else if the absolute value of the remainder is less than the dividend,
               AND the remainder is the same sign as the dividend, then that means that:
                    - if both are positive, then we are exactly remainder units less than
                        divisor, so we cannot proceed any further.
                    - if both are negative, then we are exactly remainder units more than
                        divisor, so we cannot proceed any further.
               In both cases we return the remainder and quotient (median).

               Else if the remainder and the dividend are different signs, then that means:
                   - if dividend is negative and remainder is positive, then if we multiply
                        our sample quotient (median) with the divisor, we have actually
                        gone too far and are now less than the dividend (to get a positive
                        remainder). So we do a search on the left half of the
                        listOfPossibleQuotients array to get a smaller product to check.
                   - if dividend is positive and remainder is negative, then if we multiply
                        our sample quotient (median) with the divisor, we have actually
                        gone too far and are now more than the dividend (to get a negative
                        remainder). So we do a search on the left half of the
                        listOfPossibleQuotients array to get a smaller product to check.

                Else the remainder and the dividend are the same sign, which that means:
                    - if dividend and remainder are positive, then if we multiply
                         our sample quotient (median) with the divisor, we have actually
                         gone not far enough and are now less than the dividend (to get a positive
                         remainder). So we do a search on the right half of the
                         listOfPossibleQuotients array to get a smaller product to check.
                    - if dividend and remainder are negative, then if we multiply
                         our sample quotient (median) with the divisor, we have actually
                         gone not far enough and are now less than the dividend (to get a negative
                         remainder). So we do a search on the right half of the
                         listOfPossibleQuotients array to get a smaller product to check.

               */
            if(remainder === 0) {
                return {
                    remainder,
                    quotient: median
                }
            } else if(abs(remainder) < abs(denominator) && isSameSign(remainder, denominator)) {
                return {
                    remainder,
                    quotient: median
                }
            } else if(!isSameSign(remainder, numerator)){
                listOfPossibleQuotients = listOfPossibleQuotients.slice(0, floor(listOfPossibleQuotients.length/2));
            } else {
                listOfPossibleQuotients = listOfPossibleQuotients.slice(floor(listOfPossibleQuotients.length/2));
            }
        }
    }

    /* use in manual user testing */
    module.exports = {
        div,
        DivisionByZeroError
    };
});
