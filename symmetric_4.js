const encryptSync = function (key, message) {
  const crypted = [];
  const splitted = message.split('');

  if (message.length % key.length !== 0) {
    while (splitted.length % key.length !== 0) {
      splitted.push('_');
    }
  }
  for (let i = 0; i < splitted.length; i += key.length) {
    for (let j = 0; j < key.length; j++) {
      crypted.push(splitted[i + key[j]]);
    }
  }
  return crypted.join('');
};

const decryptSync = (key, cipher) => {
  const splitted = cipher.split('');
  const decrypted = [];
  for (let i = 0; i < splitted.length; i += key.length) {
    for (let j = 0; j < key.length; j++) {
      decrypted.push(cipher.charAt(i + key.indexOf(j)));
    }
  }
  return decrypted.filter((item) => item != '_').join('');
};

module.exports = { encryptSync, decryptSync };
