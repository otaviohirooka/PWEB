function Retangulo(altura, base) {
    this.altura = altura
    this.base = base
    this.area = () => base * altura
}

const y = prompt("Qual a altura do retângulo?")
const x = prompt("Qual a base do retângulo?")

var retangulo1 = new Retangulo(y, x)
alert("Área: " + retangulo1.area())