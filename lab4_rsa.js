const sha1 = require('js-sha1');
const fs = require('fs');
const RSA = require('./rsa');
const { encryptSync, decryptSync } = require('./symmetric_4');
const message = fs.readFileSync('./variant_15.txt').toString();

const key = [1, 6, 2, 5, 8, 9, 0, 11, 3, 4, 7, 10, 12];
const hashed = sha1(message);
const cryptedHash = encryptSync(key, hashed);

console.log('MESSAGE: \n' + message + '\n');
console.log('HASHED:\t' + hashed + '\n');
console.log('CRYPTED HASH:\t' + cryptedHash + '\n');

const encryptedKey = RSA.encrypt(key);
console.log('ENCRYPTED KEY (S):\t' + encryptedKey + '\n');

const decryptedKey = RSA.decrypt(encryptedKey);
console.log('DECRYPTED KEY (S):\t' + decryptedKey + '\n');

const decryptedHash = decryptSync(decryptedKey, cryptedHash);
console.log('DECRYPTED HASH:\t' + decryptedHash + '\n');
