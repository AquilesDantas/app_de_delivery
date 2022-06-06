// const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const fs = require('fs');
// const { sign } = require('jsonwebtoken');
// const { readFileSync } = require('fs');

class ServiceAuth {
  static encrypt(password) {
   return crypto.createHash('md5').update(password).digest('hex');
  }

  static authPassword(password, encryptPass) {
    return password === encryptPass;
  }

  static getToken(email) {
    const token = jwt.sign(
      {
        email,
      },
      fs.readFileSync('jwt.evaluation.key').toString(),
      { algorithm: 'HS256' },
    );
    return token;
  }

  static tokenValidation(token) {
    const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

    if (token) {
      const tokenCheck = jwt.verify(token, SECRET);
      return tokenCheck;
    }
    return false;
  }
}

module.exports = { ServiceAuth };