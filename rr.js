let enterPrice, SL, TP, walletSize, risk;
let dolarRisk, leverage, RR, profit, buySize;

function fark(sayi1, sayi2) {
  if (sayi1 > sayi2) return sayi1 - sayi2;
  else return sayi2 - sayi1;
}
function func() {
  // get values
  enterPrice = document.getElementById('enter').value;
  SL = document.getElementById('sl').value;
  TP = document.getElementById('tp').value;
  walletSize = document.getElementById('wallet').value;
  risk = document.getElementById('risk2').value;
  //uselater
  riskPerBTC = fark(enterPrice, SL);
  profitPerBTC = fark(enterPrice, TP);
  // math
  dolarRisk = (walletSize / 100) * risk;
  RR = profitPerBTC / riskPerBTC;
  buySize = dolarRisk / riskPerBTC;
  leverage = (buySize * enterPrice) / walletSize;
  profit = profitPerBTC * buySize;

  // print it baby! rollie rollie ball
  document.getElementById('risk').innerHTML = dolarRisk;
  document.getElementById('RR').innerHTML = RR;
  document.getElementById('buySize').innerHTML = buySize;
  document.getElementById('Leverage').innerHTML = leverage;
  document.getElementById('Profit').innerHTML = profit;
}
