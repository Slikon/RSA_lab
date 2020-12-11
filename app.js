const fs = require('fs');
const RSA = require('./rsa');

const message = fs.readFileSync('./variant_15.txt').toString();

const encoded = RSA.encode(message);
const encrypted = RSA.encrypt(encoded);
const decrypted = RSA.decrypt(encrypted);
const decoded = RSA.decode(decrypted);

RSA.printSetup();

console.log(message);
console.log(encoded);
console.log(encrypted);
console.log(decrypted);
console.log(decoded);
