function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-content section");
  const activeClass = "ativo";

  if (tabContent.length && tabMenu.length) {
    tabContent[0].classList.add(activeClass);
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList[0].classList.add(activeClass);

    function activeAccordion(event) {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Alternativ form {
    // const topSection = section.offsetTop;
    // window.scrollTo({
    //   top: topSection,
    //   behavior: "smooth",
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initSmoothScroll();

function initAnimateScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    // metodo de ja deixar a classe sections[0].classList.add("ativo");

    function animateScroll() {
      sections.forEach((section) => {
        const topSection = section.getBoundingClientRect().top;
        const isSectionVisible = topSection - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    // para quando o usuário abrir o site e não ter tela branca
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
initAnimateScroll();
