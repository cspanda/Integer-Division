const division = require('../src/division');

const userTests = [
    [5, 0],
    [-5, 0],
    [0, 6],
    [0, -100],
    [6, 5],
    [6, -5],
    [-6, 5],
    [-6, -5],
    [12, 4],
    [12, -3],
    [-12, 2],
    [-12, -1],
    [5, 7],
    [6, -8],
    [-5, 7],
    [-6, -8]
];

userTests.forEach(test => {
    console.log(`Dividend: ${test[0]}, Divisor: ${test[1]}`);
    try {
        const result = division.div(test[0], test[1]);
        console.log(`Quotient: ${result.quotient}, Remainder: ${result.remainder} \n`);
    } catch(err) {
        console.log(`${err} \n`);
    }
})
