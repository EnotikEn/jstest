// const timefix = require('./index')
const fs = require('fs')

const fib = (n) => {
    return new Promise((resolve, reject) => {
            if (n === 0 || n === 1 ){
                return n
            }
    
    return fib(n-1) + fib(n-2)
    })  
}
const varNumb = 40

console.log(fib(varNumb))

setTimeout(() => console.log('Time Over'), 20)