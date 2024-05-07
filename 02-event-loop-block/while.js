const fs = require('fs');

let isRun = true;

setTimeout(() => (isRun = false), 30);

process.nextTick(() => console.log('Next tick'));

const setImmediatePromise = () => {
    return new Promise((resolve, reject) => {
        setImmediate(() => resolve());
        // resolve()
    });
};

const whileLoop = async () => {
    while (isRun) {
        console.log('Is running...');
        await setImmediatePromise();
    }
};

whileLoop().then(() => console.log('Is stop'));
