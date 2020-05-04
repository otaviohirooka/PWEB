const verifyChoice = (choice) => {
    if (choice !== 'pedra' && choice !== 'papel' && choice !== 'tesoura') {
        alert("Escolha incorreta. Tente novamente")
        choice = prompt("Escolha sua jogada: pedra, papel ou tesoura?")
        verifyChoice(choice)
    }
}

const computerChoice = () => {
    const number = Math.random()*100
    if(number < 33) {
        return 'pedra'
    } else if(number > 66) {
        return 'papel'
    } else {
        return 'tesoura'
    }
}

const result = (choice, environmentChoice) => {
    if(choice === environmentChoice) {
        alert("Resultado: Empatou!")
    } else if(choice === 'pedra' && environmentChoice === 'papel') {
        alert("Resultado: Você perdeu!")
    } else if(choice === 'pedra' && environmentChoice === 'tesousa') {
        alert("Resultado: Você ganhou!")
    } else if(choice === 'papel' && environmentChoice === 'pedra') {
        alert("Resultado: Você ganhou!")
    } else if(choice === 'papel' && environmentChoice === 'tesoura') {
        alert("Resultado: Você perdeu!!!")
    } else if(choice === 'tesoura' && environmentChoice === 'pedra') {
        alert("Resultado: Você perdeu!")
    } else if(choice === 'tesoura' && environmentChoice === 'papel') {
        alert("Resultado: Você ganhou!!!")
    } 
}

const choice = prompt("Escolha sua jogada: pedra papel ou tesoura?")
verifyChoice(choice)
const environmentChoice = computerChoice()
alert("Você escolheu " + choice + " e o computador escolheu " + environmentChoice)
result(choice, environmentChoice)

