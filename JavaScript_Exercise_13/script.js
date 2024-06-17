// function somaParPromise(a, b) {
    
//     return new Promise((resolve, reject) => {
//       const soma = a + b;
//       if (soma % 2 === 0) {
//         resolve(soma);
//       } else {
//         reject(new Error('A soma é ímpar.'));
//       }
//     });
// };




const soma = (a, b) => {
    const total = a + b;
  
    const promise = new Promise((resolve, reject) => {
      if (total % 2 == 0) {
        resolve("é par");
      } else {
        reject("é impar");
      }
    });
  
};

const somaFinal = async (a, b) => {
  try{
  const resultado = await soma (a, b);
  console.log (resultado);
} catch (error) {
  console.log(error);
}
};   





