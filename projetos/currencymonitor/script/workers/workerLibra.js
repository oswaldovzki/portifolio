async function conectaAPI() {
    const conecta = await fetch("https://economia.awesomeapi.com.br/json/last/GBP-BRL");
    const conectaTraduzido = await conecta.json();
    postMessage(conectaTraduzido.GBPBRL);
}

addEventListener("message", () => {
    conectaAPI();
    setInterval(() => conectaAPI(), 30000);
})