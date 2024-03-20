import imprimeCotacao from "./imprimeCotacao.js";

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

conectaAPI();
setInterval(() => conectaAPI(), 30000);
async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/GBP-BRL");
    const conectaTraduzido = await conecta.json();
    let tempo = geraHorario();
    let valor = conectaTraduzido.GBPBRL.ask;
    addData(graficoParaLibra, tempo, valor);
    imprimeCotacao('Libra', valor);
}


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