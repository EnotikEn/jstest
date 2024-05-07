// const timefix = require('./index')
const fs = require('fs');

const cache = new Map();

const fib = (n) => {
    return new Promise((resolve, reject) => {
        if (n === 0 || n === 1) {
            return resolve(n);
        }

        if (cache.has(n)) {
            return resolve(cache.get(n));
        }

        setImmediate(() =>
            fib(n - 1).then((fib1) =>
                fib(n - 2).then((fib2) => {
                    cache.set(n, fib1 + fib2);
                    resolve(fib1 + fib2);
                })
            )
        );
    });
};

const varNumb = 102;

fib(varNumb).then((res) => console.log(res));

setTimeout(() => console.log('Time Over'), 0);
