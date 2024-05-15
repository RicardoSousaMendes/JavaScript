function calcularPrecoComDesconto(preco, desconto){
    if (desconto < 0.1) {
        return preco + (preco * desconto);
    } else if (desconto >= 0.1 && desconto < 0.3) {
        return preco - (preco * desconto);
    } else if (desconto === 0) {
        return preco * 2;
    } else {
        return "desconto inválido";
    }
}

