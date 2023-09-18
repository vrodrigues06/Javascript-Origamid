export default function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowMetade = window.innerHeight * 0.6;
  function animateScroll() {
    sections.forEach((section) => {
      const topSection = section.getBoundingClientRect().top;
      const isSectionVisible = topSection - windowMetade < 0;
      if (isSectionVisible) section.classList.add("ativo");
      else if (section.classList.contains("ativo"))
        section.classList.remove("ativo");
    });
  }
  if (sections.length) {
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
