const alunos = [
	{
		nome: "Bruno",
		idade: 31,
	},
	{
		nome: "Bruna",
		idade: 26,
	},
    {
		nome: "Rajadinha",
		idade: 10,
	},
];

// filter
const alunosFiltrados = alunos.filter(aluno => aluno.idade <= 18) // posição, nome e idade do aluno menor de 18 anos
console.table(alunosFiltrados);

// find
const alunoRajadinha = alunos.find(aluno => aluno.nome === 'Rajadinha') // informações do aluno
console.log(alunoRajadinha);

// findIndex
const alunoRajadinhaIndex = alunos.findIndex(aluno => aluno.nome === 'Rajadinha') // mostra a posição do aluno
console.log(alunoRajadinhaIndex);

// reduce
const idades = alunos.reduce((acc, aluno)=>{ // soma a idade de todos os alunos
    return acc + aluno.idade
},0);

console.log(idades);

// soma & every
const acimaDeNove = alunos.some(alunos => alunos.idade < 10); // verificando se algum aluno é menor de dez anos
const menorQueNoventa = alunos.every(alunos => alunos.idade < 90); // verificando se algum aluno é menor de noventa anos

console.log(acimaDeNove);
console.log(menorQueNoventa);