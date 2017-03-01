LightStep Coding Challenge (JavaScript)

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

const result = division.div(12,4);
console.log(`Quotient: ${result.quotient}, Remainder: ${result.remainder}`); \\ Quotient: 3, Remainder: 0
```
