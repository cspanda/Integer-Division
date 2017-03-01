LightStep Coding Challenge (JavaScript)

To install dependencies (intern), do an
```
npm install.
```
Tests are written with chai and intern. To run tests,
```
npm test
```

To test the program manually, you can either call
```
npm start
```

which tests all pairs of dividends/divisors in the userTest array, or include the module yourself:

```
const division = require('../src/division');

const result = division.div(12,4);
console.log(`Quotient: ${result.quotient}, Remainder: ${result.remainder}`);
```
