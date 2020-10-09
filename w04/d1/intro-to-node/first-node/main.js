// const multiply = (a, b) => a * b;

// const n = multiply(5, 10);

// console.log(n);

const fs = require('fs'); // some file in the node js install called fs.js

console.log(typeof fs);

fs.writeFile('./hello.txt', 'Hello!', function() {
  console.log('done creating file');
});
