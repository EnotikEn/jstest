const { time, timeStamp } = require('console')
const fs = require('fs')
const dns = require('dns')

const timefix = () => {
    return performance.now().toFixed(2)
}

console.log('Program Start')

fs.writeFile('./test/test.txt', 'Writing', () => console.log('Text written to File (test.txt)',timefix()))

Promise.resolve().then(() => console.log('Promise 1', timefix()))

process.nextTick(() => console.log('Next tick 1', timefix()))

setImmediate(() => console.log('Immediate 1', timefix()))

setTimeout(() => console.log('timeout 1', timefix()), 0)
setTimeout(() => console.log('timeout 2', timefix()), 10)
setTimeout(() => {
    process.nextTick(() => console.log('Next tick 2', timefix()))
    console.log('timeout 3', timefix())
}, 100)

dns.lookup('localhost', (err, address, family) => {
    console.log('DNS 1', address, timefix())
    Promise.resolve().then(() => console.log('Promise 2', timefix()))
})

console.log('Program End')