import selecionaCotacao from "./imprimeCotacao.js";

function geraHorario() {
    let data = new Date();
    let hours = String(data.getHours()).padStart(2, '0');
    let minutes = String(data.getMinutes()).padStart(2, '0');
    let seconds = String(data.getSeconds()).padStart(2, '0');
    let horario = `${hours}:${minutes}:${seconds}`;
    return horario;
}

function addData(chart, label, newData) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    chart.update();
}

//Gráfico Libra

const graficoLibra = document.getElementById('graficoLibra');

const graficoParaLibra = new Chart(graficoLibra, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Cotação da Libra',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

let workerLibra = new Worker('script/workers/workerLibra.js');
workerLibra.postMessage('gbp');

workerLibra.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.bid;
    selecionaCotacao("libra", valor);
    addData(graficoParaLibra, tempo, valor);
})

//Gráfico Euro

const graficoEuro = document.getElementById('graficoEuro');

const graficoParaEuro = new Chart(graficoEuro, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Cotação da Euro',
            data: [],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

let workerEuro = new Worker('script/workers/workerEuro.js');
workerEuro.postMessage('eur');
workerEuro.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    selecionaCotacao("euro", valor);
    addData(graficoParaEuro, tempo, valor);
})

//Gráfico Dolar

const graficoDolar = document.getElementById('graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Cotação da Dolar',
            data: [],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

let workerDolar = new Worker('script/workers/workerDolar.js');
workerDolar.postMessage('eur');
workerDolar.addEventListener("message", event => {
    let tempo = geraHorario();
    let valor = event.data.ask;
    selecionaCotacao("dolar", valor);
    addData(graficoParaDolar, tempo, valor);
})