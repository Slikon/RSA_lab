const bigInt = require('big-integer');

const p = 157;
const q = 173;
const e = 5;

const n = p * q;
const fi = (p - 1) * (q - 1);
let d = 7;
while ((d * e) % fi !== 1) {
  d += 1;
}

const public_key = [e, n];
const private_key = [d, n];

module.exports = class RSA {
  static encode(str) {
    const codes = str.split('').map((i) => Number(i.charCodeAt()));

    return codes;
  }

  static encrypt(arr) {
    const crypts = arr.map((i) =>
      Number(bigInt(bigInt(i).pow(public_key[0]).mod(public_key[1])))
    );

    return crypts;
  }

  static decrypt(arr) {
    const decrypts = arr.map((i) =>
      Number(bigInt(bigInt(i).pow(private_key[0]).mod(private_key[1])))
    );

    return decrypts;
  }

  static decode(arr) {
    let decoded_str = '';
    for (const elem of arr) {
      decoded_str += String.fromCharCode(elem);
    }

    return decoded_str;
  }

  static printSetup() {
    console.log('SETUP:\n');
    console.log('p:\t' + p);
    console.log('q:\t' + q);
    console.log('n:\t' + n);
    console.log('fi:\t' + fi);
    console.log('e:\t' + e);
    console.log('d:\t' + d);
    console.log(`public_key:\t${public_key}`);
    console.log(`private_key:\t${private_key}`);
    console.log('\n\n');
  }
};
