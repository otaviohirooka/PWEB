verifyNumber = (n, opcao) => {
    if(isNaN(n)) {
        alert("Digite um número.")
        switch (opcao) {
            case 1:
                const firstNumber = prompt("Escolha o primeiro número")
                break;
            case 2:
                const secondNumber = prompt("Escolha o segundo número")
                break;
            case 3:
                const thirdNumer = prompt("Escolha o terceiro número")
                break;
            default:
                break;
        }
    }
}

higherNumber = (n1, n2, n3) => {
    if(n1 > n2) {
        return (n1 > n3) ? n1 : n3
    } else {
        return (n2 > n3) ? n2 : n3
    }
}

const firstNumber = prompt("Escolha o primeiro número")
verifyNumber(firstNumber, 1)
const secondNumber = prompt("Escolha o segundo número")
verifyNumber(secondNumber, 2)
const thirdNumer = prompt("Escolha o terceiro número")
verifyNumber(thirdNumer, 3)
const bigger = higherNumber(firstNumber, secondNumber, thirdNumer)
alert("O Maior número é " + bigger)