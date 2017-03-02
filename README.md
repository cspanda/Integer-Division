Integer division without using the division(\) sign in JavaScript

To install dev-dependencies, do an
```
npm install
```
Tests are written with [chai](http://chaijs.com/api/assert/) and [intern](https://theintern.github.io/). To run tests,
```
npm test
```

To test the program manually, you can either call
```
npm start
```

which checks all pairs of dividends/divisors in the userTests array inside tests/user-test.js, or include the module yourself:

```javascript
const division = require('../src/division');

try {
    const result1 = division.div(12,4);
    console.log(`Quotient: ${result1.quotient}, Remainder: ${result1.remainder}`); // Quotient: 3, Remainder: 0

    const result2 = division.div(5,0);
} catch(err) {
    console.log(`${err} \n`); // DivisionByZeroError: Division by zero error.
}

```
