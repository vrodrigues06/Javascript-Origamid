export default function initFetchBtc() {}

async function fetchBtc() {
  try {
    const btcDados = await fetch("https://blockchain.info/ticker");
    const btcJson = await btcDados.json();
    const liBtc = document.querySelector("[data-btc]");

    liBtc.innerText = (1000 / btcJson.BRL.sell).toFixed(4);
  } catch (erro) {
    console.log(erro);
  }
}

fetchBtc();
