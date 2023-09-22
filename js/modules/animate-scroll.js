export default class AnimateScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;

    this.animateScroll = this.animateScroll.bind(this);
  }

  animateScroll() {
    this.sections.forEach((section) => {
      const topSection = section.getBoundingClientRect().top;
      const isSectionVisible = topSection - this.windowMetade < 0;
      if (isSectionVisible) section.classList.add("ativo");
      else if (section.classList.contains("ativo"))
        section.classList.remove("ativo");
    });
  }

  init() {
    this.animateScroll();
    window.addEventListener("scroll", this.animateScroll);
    return this;
  }
}
