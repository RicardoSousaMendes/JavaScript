paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia']

console.log(paises);

function contarPaises() {
    return paises.length;
}

console.log(contarPaises());

paises.unshift('Portugal');
console.log(paises);

paises.push('Espanha');
console.log(paises);

console.log(paises.slice(-3));

console.log(paises.join(' - '));

