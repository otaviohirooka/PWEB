const Aluno1 = {
    RA: 0,
    nome: ""
}

Aluno1.nome = prompt("Nome do primeiro aluno:")
Aluno1.RA = prompt("RA do primeiro aluno:")

const Aluno2 = new Object()
Aluno2.nome = prompt("Nome do segundo aluno:")
Aluno2.RA = prompt("RA do segundo aluno:")

const Aluno3 = {}
Aluno3.nome = prompt("Nome do terceiro aluno:")
Aluno3.RA = prompt("RA do terceiro aluno:")

alert("Primeiro aluno: " + Aluno1.nome + ". RA: " + Aluno1.RA)
alert("Segundo aluno: " + Aluno2.nome + ". RA: " + Aluno2.RA)
alert("Terceiro aluno: " + Aluno3.nome + ". RA: " + Aluno3.RA)