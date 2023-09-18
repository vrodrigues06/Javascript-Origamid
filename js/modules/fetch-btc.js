export default function initFetchBtc() {
  async function fetchBtc() {
    try {
      const btcDados = await fetch("https://blockchain.info/ticker");
      const btcJson = await btcDados.json();
      const spanBtc = document.querySelector("[data-btc]");
      const btcBrl = (1000 / btcJson.BRL.sell).toFixed(4);

      spanBtc.innerText = btcBrl;
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBtc();
}
