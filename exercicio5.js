function calcularDesconto(valor) {
    if (valor >= 100) {
return valor - 20        
    }else{
        return valor;
    }
    
}

if (calcularDesconto(100) === 80) {
    console.log("teste passou: desconto aplicad0");
} else {
     console.log("bug! o teste pegou um erro ")
}