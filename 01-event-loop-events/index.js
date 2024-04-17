const { time, timeStamp } = require('console')
const fs = require('fs')
const dns = require('dns')

const timefix = () => {
    return performance.now().toFixed(2)
}

const outputText = (text,) =>{
    console.log(text,timefix())
}

outputText('Program Start')

fs.writeFile('./test/test.txt', 'Writing', () => outputText('Writing text'))

Promise.resolve().then(() => outputText('Promise 1'))

process.nextTick(() => outputText('Next tick 1'))

setImmediate(() => outputText('Immediate 1'))

setTimeout(() => outputText('timeout 1'), 0)
setTimeout(() => outputText('timeout 2'), 10)
setTimeout(() => {
    process.nextTick(() => outputText('Next tick 2'))
    outputText('timeout 3')
}, 50)

let intervalCount = 0
const intervalId = setInterval(() => {
    outputText(`Interval ${intervalCount += 1}`)
    if (intervalCount === 3) clearInterval(intervalId)
}, 100)

dns.lookup('localhost', (err, address, family) => {
    console.log('DNS 1', address, timefix())
    Promise.resolve().then(() => outputText('Promise 2'))
})

outputText('Program End')