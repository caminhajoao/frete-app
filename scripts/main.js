
import { regionsAndCities } from './regionsAndCities.js';
import {
    functionFreight1, functionFreight2, functionFreight3, functionFreight4,
    functionFreight5, functionFreight6, functionFreight7, functionFreight8,
    functionFreight9, functionFreight10
} from './freightCalculations.js';

const citySelect = document.getElementById('city-select');
const cubageInput = document.querySelector('input[type="number"]');
const calculateButton = document.getElementById('clear-btn1');
const clearButton = document.getElementById('clear-btn2');
const container = document.querySelector('.container');

// Mapeamento de regiões para funções de cálculo
const regionToFunctionMap = {
    'ALTO CAPIBARIBE': functionFreight1,
    'ARARIPINA': functionFreight2,
    'BREJO PERNAMBUCANO': functionFreight3,
    'GARANHUNS': functionFreight4,
    'ITAPARICA': functionFreight4,
    'MATA MERIDIONAL PERNAMBUCANA': functionFreight4,
    'MATA SETENTRIONAL PERNAMBUCANA': functionFreight4,
    'MEDIO CAPIBARIBE': functionFreight4,
    'ITAMARACA': functionFreight5,
    'SUAPE': functionFreight5,
    'PAJEU': functionFreight6,
    'PETROLINA': functionFreight7,
    'RECIFE': functionFreight8,
    'VITORIA DE SANTO ANTAO': functionFreight8,
    'SALGUEIRO': functionFreight9,
    'SERTAO DO MOXOTO': functionFreight9,
    'VALE DO IPANEMA': functionFreight10,
    'VALE DO IPOJUCA': functionFreight10
};


// Função para popular cidades no dropdown em ordem alfabética
const populateCities = () => {
    const sortedCities = [];

    // Percorre as regiões e cidades e adiciona no array sortedCities
    Object.entries(regionsAndCities).forEach(([region, cities]) => {
        cities.forEach(city => {
            sortedCities.push({ region, city: city.trim() });
        });
    });

    // Ordena o array de cidades por nome
    sortedCities.sort((a, b) => a.city.localeCompare(b.city));

    // Adiciona as opções no dropdown
    sortedCities.forEach(({ region, city }) => {
        const option = document.createElement('option');
        option.value = `${region}|${city}`; // Atrela região à cidade
        option.textContent = city;
        citySelect.appendChild(option);
    });
};

// Inicializa o dropdown com as cidades
populateCities();

// Evento ao clicar no botão "Calcular frete"
calculateButton.addEventListener('click', () => {
    const selectedValue = citySelect.value; // Exemplo: "ALTO CAPIBARIBE|CASINHAS"
    const [region, city] = selectedValue.split('|');
    const cubage = parseFloat(cubageInput.value);

    console.log(`Região selecionada: ${region}, Cidade selecionada: ${city}`); // Depuração
    console.log(`Cubagem: ${cubage}`); // Depuração

    if (!region || !city) {
        alert("Por favor, selecione uma cidade.");
        return;
    }

    if (isNaN(cubage) || cubage <= 0) {
        alert("Por favor, insira um valor válido para a cubagem.");
        return;
    }

    const freightFunction = regionToFunctionMap[region];

    if (!freightFunction) {
        alert("Não foi possível calcular o frete para a região selecionada.");
        return;
    }

    const [freightValue, freightConstant] = freightFunction(cubage);

    // Salvar os resultados no localStorage
    const resultData = {
        region,
        city,
        freightValue: freightValue.toFixed(2),
        freightConstant: freightConstant.toFixed(2)
    };
    localStorage.setItem('freightResult', JSON.stringify(resultData));

    // Redireciona para a página de resultados
    window.location.href = 'resultado.html'; // Substitua com o nome correto da sua página
});

// Evento ao clicar no botão "Limpar"
clearButton.addEventListener('click', () => {
    cubageInput.value = '';
    citySelect.value = '';
    const resultElement = document.querySelector('.freight-result');
    if (resultElement) {
        resultElement.remove();
    }

    
});
