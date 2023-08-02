export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll("[data-numero]");
  if (numeros) {
    function animaNumeros() {
      numeros.forEach((n) => {
        const total = +n.innerText;
        const incremento = Math.floor(total / 200);
        let start = 0;
        const timer = setInterval(() => {
          start += incremento;
          n.innerText = start;
          if (start >= total) {
            n.innerText = total;
            clearInterval(timer);
          }
        }, 25 * Math.random());
      });
    }

    function handleMutation(mutation) {
      if (mutation[0].target.classList.contains("ativo")) {
        oberver.disconnect();
        animaNumeros();
      }
    }

    const oberveTarget = document.querySelector(".numeros");
    const oberver = new MutationObserver(handleMutation);

    oberver.observe(oberveTarget, { attributes: true });
  }
}
