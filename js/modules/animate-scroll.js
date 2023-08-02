export default function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    // metodo de ja deixar a classe sections[0].classList.add("ativo");

    function animateScroll() {
      sections.forEach((section) => {
        const topSection = section.getBoundingClientRect().top;
        const isSectionVisible = topSection - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else if (section.classList.contains("ativo"))
          section.classList.remove("ativo");
      });
    }

    // para quando o usuário abrir o site e não ter tela branca
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
