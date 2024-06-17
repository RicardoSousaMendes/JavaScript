// async("Ricardo"); //resolve("Ricardo");
// asyncNome("javascript") //reject("não é um nome");


const realName = (nome) => {
    return new Promise((resolve, reject) => {
      if (nome === "Ricardo") {
        resolve(`Nome: $(nome)`);
      } else {
        reject("não é um nome");
      }
    });
};
  
const verificarNome = async (nome) => {
    try {
      const resultado = await realName(nome);
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
};




