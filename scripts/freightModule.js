// freightModule.js

// Recupera os dados do localStorage
export function displayFreightResult() {
    const resultData = JSON.parse(localStorage.getItem('freightResult'));

    if (resultData) {
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `
            <div class="freight-box">
                <p>Região: ${resultData.region}</p>
            </div>
            <div class="freight-box">
                <p>Cidade: ${resultData.city}</p>
            </div>
            <div class="freight-box">
                <p>Valor da cubagem usada (faixa): R$ ${resultData.freightConstant}</p>
            </div>
            <div class="freight-box">
                <p><strong>VALOR TOTAL DO FRETE: R$ ${resultData.freightValue}</strong></p>
            </div>
        `;
    } else {
        // Se não houver dados, exibe uma mensagem
        document.getElementById('result').innerHTML = `
            <div class="freight-box">
                <p>Não foi possível recuperar os resultados.</p>
            </div>
        `;
    }
}

export function setupClearButton() {
    document.getElementById('clear-btn2').addEventListener('click', () => {
        // Redireciona para a página index.html
        window.location.href = 'index.html';
    });
}
