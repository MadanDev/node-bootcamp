const fs = require('fs');
const crypto = require('crypto');

//process.env.UV_THREADPOOL_SIZE = 4;

//setTimeout
setTimeout(() => console.log('Timer 1 finished'), 0);

//setImmediate
setImmediate(() => console.log('Immediate 1 finished'))

//fileRead
fs.readFile('test-file.txt', () => {
    console.log('I/O finished ')
    console.log('-------------')
    const start = Date.now();
    setTimeout(() => console.log('Timer 2 finished'), 0);
    setTimeout(() => console.log('Timer 3 finished'), 3000);
    setImmediate(() => console.log('Immediate 2 finished'));
    process.nextTick(() => console.log('Process.nextTick'));

    crypto.pbkdf2Sync('Password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'Password encrypted');

    crypto.pbkdf2Sync('Password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'Password encrypted');

    crypto.pbkdf2Sync('Password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'Password encrypted');

    crypto.pbkdf2Sync('Password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now() - start, 'Password encrypted');
})

//top-level statements
console.log('i am the top level code');