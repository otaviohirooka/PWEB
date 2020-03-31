const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const nota3 = document.getElementById('nota3')

nome = prompt("Qual é o seu nome?")
let media

document.getElementById('buttonMedia').addEventListener('click', () => {
    if(nota1.value == "" || nota2.value == "" || nota3.value == "") {
        alert("Você deixou um espaço em branco! Preencha todos os campos.");
    }else if (isNaN(nota1.value) || isNaN(nota2.value) || isNaN(nota3.value)){
        alert("Você digitou um caracter! Troque por um número.");
    } else {
        media = ((Number(nota1.value) +  Number(nota2.value) +  Number(nota3.value)) / 3).toFixed(2)
        alert(`${nome} sua média foi ${media}.`)
        
    }
})

document.getElementById('buttonClean').addEventListener('click', () => {
    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
})
