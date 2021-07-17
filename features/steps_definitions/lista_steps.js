const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;
const Lista = require("../../src/lista.js");

let contexto = {};

Given('una lista vacía', function () {
    contexto.lista = new Lista();
});

Then('la lista tiene 0 elemento almacenado', function () {
    expect(contexto.lista.count()).to.be.equal(0);
});
