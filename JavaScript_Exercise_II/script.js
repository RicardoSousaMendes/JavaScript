let n = 1

if(n == 1) {
    console.log('Eu sou único');
} else if(n == 2){
    console.log('Somos pares');
} else if(n == 3){
    console.log('Somos um trio');
}

switch (n) {
    case 1:
        console.log('Eu sou único');
        break;

    case 2:
        console.log('Somos pares');
        break;
    
    case 3:
        console.log('Somos um trio');
        break;

    default:
        console.log('isto está errado');
        break;
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}
