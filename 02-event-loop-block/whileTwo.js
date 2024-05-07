const fs = require('fs');

let runWhile = true;

setTimeout(() => (runWhile = false), 100);

process.nextTick(() => console.log('Next tick'));

const funcPromise = () => {
    return new Promise((resolve, reject) => {
        // setImmediate(() => resolve())
        setTimeout(() => resolve(), 10);
    });
};

const funcWhile = async () => {
    while (runWhile) {
        console.log('Run');
        await funcPromise();
    }
};

funcWhile().then(() => console.log('End'));
