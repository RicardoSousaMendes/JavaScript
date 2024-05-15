const meses = new Array (4);
meses [0] = "janeiro";
meses [1] = "fevereiro";
meses [2] = "março";
meses [3] = "abril";


console.log('======================================')


const meses2 = ["janeiro", "fevereiro", "março", "abril"];


console.log('======================================')


for (let k = 0; k < meses.length; k++){
    console.log(meses[k]);
}

meses.push("maio");
console.log(meses);