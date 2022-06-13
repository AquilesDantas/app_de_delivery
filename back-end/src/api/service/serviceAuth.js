const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const fs = require('fs');

class ServiceAuth {
  static encrypt(password) {
   return crypto.createHash('md5').update(password).digest('hex');
  }

  static authPassword(password, encryptPass) {
    return password === encryptPass;
  }

  static getToken(id, email) {
    const token = jwt.sign(
      {
        id,
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

  static decodedToken(token) {
    try {
      return jwt.decode(token);
    } catch (error) {
      return null;
    }
  }
}

module.exports = { ServiceAuth };