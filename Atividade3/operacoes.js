numero1 = prompt("Qual é o primeiro número?")
numero1 = parseFloat(numero1)
numero2 = prompt("Qual é o segundo número?")
numero2 = parseFloat(numero2)

document.getElementById('buttonCalcular').addEventListener('click', () => {
    if(!numero1 || !numero2) {
        alert('Digite os números corretamente')
    } else {
        alert(`${numero1} + ${numero2} = ${numero1 + numero2}.`)
        alert(`${numero1} - ${numero2} = ${numero1 - numero2}.`)
        alert(`${numero1} * ${numero2} = ${numero1 * numero2}.`)
        alert(`${numero1} / ${numero2} = ${numero1 / numero2}.`)
        alert(`Resto de ${numero1} dividido por ${numero2} é ${numero1 % numero2}.`)
    }
})
