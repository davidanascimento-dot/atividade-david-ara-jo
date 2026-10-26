function verificarServidor(temp) {
    if (temp > 80) {
        return "PERIGO";
    }

    if (temp >= 50) {
        return "ATENCAO";
    }

    return "NORMAL";
}

function testarServidor(temp, esperado) {
    const resultado = verificarServidor(temp);

    if (resultado === esperado) {
        console.log("Teste aprovado:", temp, "°C =>", resultado);
    } else {
        console.log("Teste falhou:", temp, "°C =>", resultado, "(esperado:", esperado + ")");
    }
}

testarServidor(35, "NORMAL");
testarServidor(65, "ATENCAO");
testarServidor(90, "PERIGO");
