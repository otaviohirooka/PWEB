function Conta() {
    var nome, banco, numero, saldo
    this.getNome = function() {
        return nome
    }
    this.setNome = function(value) {
        nome = value
    }
    this.getBanco = function() {
        return banco
    }
    this.setBanco = function(value) {
        banco = value
    }
    this.getNumero = function() {
        return numero
    }
    this.setNumero = function(value) {
        numero = value
    }
    this.getSaldo = function() {
        return saldo
    }
    this.setSaldo = function(value) {
        saldo = value
    }
}

function Corrente() {
    var saldoEspecial
    this.getSaldoEspecial = function() {
        return saldoEspecial
    }
    this.setSaldoEspecial = function(value) {
        saldoEspecial = value
    }
}

function Poupanca() {
    var juros, dtVencimento
    this.getJuros = function() {
        return juros
    }
    this.setJuros = function(value) {
        juros = value
    }
    this.getDtVencimento = function() {
        return dtVencimento
    }
    this.setDtVencimento = function(value) {
        dtVencimento = value
    }
}

Corrente.prototype = new Conta()
Poupanca.prototype = new Conta()

nConta = new Corrente()
nConta.setBanco('Bradesco')
nConta.setNome('Shura')
nConta.setNumero(1234)
nConta.setSaldo(123.45)
nConta.setSaldoEspecial(3000.00)

nPoupanca = new Poupanca()
nPoupanca.setBanco('HSBC')
nPoupanca.setNome('Aiolos')
nPoupanca.setNumero(4321)
nPoupanca.setSaldo(433.20)
nPoupanca.setDtVencimento('30/06/2020')
nPoupanca.setJuros(0.30)

alert(
    nConta.getBanco() + '\n' +
    nConta.getNome() + '\n' +
    nConta.getNumero() + '\n' +
    nConta.getSaldo() + '\n' +
    nConta.getSaldoEspecial()
)

alert(
    nPoupanca.getBanco() + '\n' +
    nPoupanca.getNome() + '\n' +
    nPoupanca.getNumero() + '\n' +
    nPoupanca.getSaldo() + '\n' +
    nPoupanca.getDtVencimento() + '\n' +
    nPoupanca.getJuros()
)