const freightConstants = {
    freight1: [59, 59, 55, 52, 49],
    freight2: [80, 80, 77, 74, 70],
    freight3: [56, 56, 53, 50, 46],
    freight4: [57, 57, 54, 50, 47],
    freight5: [47, 49, 45, 42, 39],
    freight6: [59, 59, 55, 52, 49],
    freight7: [70, 83, 80, 77, 73],
    freight8: [49, 49, 45, 42, 39],
    freight9: [60, 67, 63, 60, 57],
    freight10: [52, 56, 53, 50, 46]
};

// Função genérica para calcular o frete
export function calculateFreight(cubagem, constants) {
    let valor_constante;
    let cubagem_usada = cubagem;

    if (cubagem <= 7) {
        valor_constante = constants[0];
        cubagem_usada = 7; // Define a cubagem mínima como 7
    } else if (cubagem <= 15.99) {
        valor_constante = constants[1];
    } else if (cubagem <= 40.99) {
        valor_constante = constants[2];
    } else if (cubagem <= 59.99) {
        valor_constante = constants[3];
    } else {
        valor_constante = constants[4];
    }

    const valor_frete = cubagem_usada * valor_constante;
    return [valor_frete, valor_constante];
}

// Funções específicas para cada conjunto de constantes usando o objeto
export function functionFreight1(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight1);
}

export function functionFreight2(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight2);
}

export function functionFreight3(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight3);
}

export function functionFreight4(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight4);
}

export function functionFreight5(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight5);
}

export function functionFreight6(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight6);
}

export function functionFreight7(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight7);
}

export function functionFreight8(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight8);
}

export function functionFreight9(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight9);
}

export function functionFreight10(cubagem) {
    return calculateFreight(cubagem, freightConstants.freight10);
}
