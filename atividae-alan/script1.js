function calcularTotal(preco, cupom) {
    if (cupom === "CIMATEC") {
        return preco - 10;
    }

    return preco;
}

function testarCalcularTotal(preco, cupom, esperado) {
    const resultado = calcularTotal(preco, cupom);

    if (resultado === esperado) {
        console.log("Teste aprovado: total =", resultado);
    } else {
        console.log("Teste falhou: esperado", esperado, "mas recebeu", resultado);
    }
}

testarCalcularTotal(120, "CIMATEC", 110);
testarCalcularTotal(100, undefined, 100);

function subirDeNivel(pontos) {
    if (pontos >= 100) {
        return "NÍVEL 2";
    }

    return "NÍVEL 1";
}

function testarSubirDeNivel(pontos, esperado) {
    const resultado = subirDeNivel(pontos);

    if (resultado === esperado) {
        console.log("Teste aprovado:", pontos, "pontos =", resultado);
    } else {
        console.log("Teste falhou:", pontos, "pontos; esperado", esperado, "mas recebeu", resultado);
    }
}

testarSubirDeNivel(50, "NÍVEL 1");
testarSubirDeNivel(100, "NÍVEL 2");
testarSubirDeNivel(150, "NÍVEL 2");
