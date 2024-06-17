var estudantes = [
    {id: 1, nome: 'João', idade: 20},
    {id: 2, nome: 'Maria', idade: 22},
    {id: 3, nome: 'Pedro', idade: 18},
    {id: 4, nome: 'Ana', idade: 21},
];

const idEstudante = (id = 1) => {
    return estudantes.find(estudante => estudante.id === id);
};

const nomesEstudantes = (listaEstudantes = estudantes) => {
    return listaEstudantes.map(estudante => `Nome do estudante: ${estudante.nome}`);
};

const estudanteIdadeMaior = (idade = 18) => 
    estudantes.filter((estudante) => estudante.idade > idade);






console.log(idEstudante());
console.log(nomesEstudantes());
console.log(estudanteIdadeMaior());




