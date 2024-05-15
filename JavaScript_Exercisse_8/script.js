let numeros = '1, 2, 3, A, B, C, 4, 5, 6, D';

let comprimento = numeros.length;

console.log(comprimento)

let primeiraOcorrencia = numeros.indexOf('2'); 
let segundaOcorrencia = numeros.indexOf('2', primeiraOcorrencia + 1); 

console.log(segundaOcorrencia);

let numeros2 = '1, 2, 3, A, B, C, 4, 5, 6, D';

let novaString = numeros2.replace(/^.*?\s/, 'Javascript é espetacular ');

console.log(novaString); 

let numeros3 = '1, 2, 3, a, B, c, 4, 5, 6, D';

let maiusculas = numeros3.toUpperCase(); 
let minusculas = numeros3.toLowerCase(); 

console.log(maiusculas);
console.log(minusculas);

let numeros4 = '1, 2, 3, A, B, C, 4, 5, 6, D';

let partes = numeros4.split('espectacular');

console.log(partes); 

