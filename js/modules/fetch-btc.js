export default function fetchBtc(url, target) {
  async function fetchBtcAsync() {
    try {
      const btcDados = await fetch(url);
      const btcJson = await btcDados.json();
      const spanBtc = document.querySelector(target);
      const btcBrl = (1000 / btcJson.BRL.sell).toFixed(4);

      spanBtc.innerText = btcBrl;
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBtcAsync();
}
