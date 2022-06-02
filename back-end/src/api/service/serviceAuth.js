const crypto = require('crypto');
const { sign } = require('jsonwebtoken');
const { readFileSync } = require('fs');

class ServiceAuth {
  static encrypt(password) {
   return crypto.createHash('md5').update(password).digest('hex');
  }

  static authPassword(password, encryptPass) {
    return password === encryptPass;
  }

  static getToken(email) {
    const token = sign(
      {
        email,
      },
      readFileSync('jwt.evaluation.key').toString(),
      { algorithm: 'HS256' },
    );
    return token;
  }
}

module.exports = { ServiceAuth };