const { expect } = require("chai");
const sinon = require("sinon");
const UserModel = require("../../../api/model/userModel");
const { LoginService } = require("../../../api/service/seviceLogin");
const { ServiceAuth } = require("../../../api/service/serviceAuth");
const users = require("../mocks/users");

const UserModelMock = {
  findOne: sinon.stub(UserModel, "findOne"),
};

const AuthServiceMock = {
  authPassword: sinon.stub(ServiceAuth, "authPassword"),
  getToken: sinon.stub(ServiceAuth, "getToken"),
};

describe("Testa LoginService", () => {
  after(() => {
    UserModelMock.findOne.restore()
  })
  let loginResponse;
  describe("Se o usuário não existe", () => {
    before(async () => {
      UserModelMock.findOne.resolves(null);
      loginResponse = await LoginService.findOne("fakeEmail@email.com");
    });
    it('deve chamar o método "findOne"', () => {
      expect(UserModelMock.findOne.called).to.be.true;
    });
    it('deve retornar um objeto com "code" 401', () => {
      expect(loginResponse).to.be.an("object");
      expect(loginResponse.code).to.be.equal(401);
    });
  });
  describe("Se o usuário existe", () => {
    describe("E a senha é válida", () => {
      before(async () => {
        UserModelMock.findOne.resolves(users[0]);
        AuthServiceMock.authPassword.resolves(true);
        AuthServiceMock.getToken.resolves("tokenValido");
        loginResponse = await LoginService.login(
          "email@email.com",
          "validPassword"
        );
      });
      it('deve chamar o método "findOne"', () => {
        expect(UserModelMock.findOne.called).to.be.true;
      });
      it("deve retornar um objeto", () => {
        expect(loginResponse).to.be.an("object");
        expect(loginResponse.code).to.be.equal(200);
      });
    });
    describe("E a senha é inválida", () => {
      before(async () => {
        UserModelMock.findOne.resolves(users[0]);
        AuthServiceMock.authPassword.resolves(false);
        loginResponse = await LoginService.login(
          "email@email.com",
          "validPassword"
        );
      });
      it('deve chamar o método "findOne"', () => {
        expect(UserModelMock.findOne.called).to.be.true;
      });
      it("deve retornar um objeto", () => {
        expect(loginResponse).to.be.an("object");
        expect(loginResponse.code).to.be.equal(401);
      });
    });
  });
});
