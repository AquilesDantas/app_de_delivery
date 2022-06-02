const { expect } = require('chai');
const sinon = require('sinon');
const User = require('../../../database/models/user');
const UserModel = require('../../../api/model/userModel');
const users = require('../mocks/users');

const UserMock = {
  findOne: sinon.stub(User, 'findOne'),
} 
describe('Testa UserModel', () => {
  let user;
  describe('Se o usuário não existe', () => {
    before(async () => {
      UserMock.findOne.resolves(null);
      user = await UserModel.findOne('fakeEmail@email.com'); 
    })
    it('deve chamar o método "findOne"', () => {
      expect(UserMock.findOne.called).to.be.true;
    });
    it('deve retornar "null"', () => {
      expect(user).to.be.null;
    })
  });
  describe('Se o usuário existe', () => {
    before(async () => {
      UserMock.findOne.resolves(users[0]);
      user = await UserModel.findOne('email@email.com');
    })
    it('deve chamar o método "findOne"', () => {
      expect(UserMock.findOne.called).to.be.true;
    });
    it('deve retornar um objeto', () => {
      expect(user).to.be.an('object');
    });
  })
})

