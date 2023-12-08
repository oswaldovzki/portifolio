var moneyInput = 30;
var dolarExchange = 5.32;

var convertedMoney = moneyInput * dolarExchange;
convertedMoney = convertedMoney.toFixed(2);

alert("R$ " + convertedMoney);

document.getElementById("dolarExchange").innerHTML = dolarExchange;
document.getElementById("convertedMoney").innerHTML = convertedMoney;
console.log()