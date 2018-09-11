const fs = require('fs')

fs.readFile('demo1.js', () => {
    console.log('readFile')
    setTimeout(() => {
        console.log('timeout')
    }, 0)
    setImmediate(() => {
        console.log('immediate')
    })
})