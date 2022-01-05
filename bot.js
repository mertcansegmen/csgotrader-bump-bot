const tradeIds = ["2300138", "2300136", "2300137", "2300115", "2300146", "2300145", "2300143", "2300142", "2300141", "2300139"];
let currentTradeIdIndexToBump = 0;

async function startBumpingTrades() {
  const tradeIdToBump = tradeIds[currentTradeIdIndexToBump];

  await fetch("https://csgotraders.net/trade/bump/" + tradeIdToBump);

  console.log(`Trade #${tradeIdToBump} bumped.`)

  if(currentTradeIdIndexToBump >= tradeIds.length - 1) {
    currentTradeIdIndexToBump = 0;
  } else {
    currentTradeIdIndexToBump++;
  }

  setTimeout(startBumpingTrades, 3 * 60 * 1000);
}

startBumpingTrades();