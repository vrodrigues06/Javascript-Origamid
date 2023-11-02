export default class TabNav {
  constructor(menu, content, ul) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.menuUL = document.querySelector(ul);
    this.activeClass = "ativo";

    this.scrollTab = this.scrollTab.bind(this);
  }

  // ativa tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const { anime } = this.tabContent[index].dataset;
    this.tabContent[index].classList.add(this.activeClass, anime);
  }

  // ativa o tab de acordo com o index quando o scroll identifica a posicao do item
  scrollTab() {
    if (window.innerWidth > 700) {
      this.tabMenu.forEach((itemMenu, index) => {
        const itenTop = itemMenu.getBoundingClientRect().top;
        if (itenTop <= 310 && itenTop > 100) {
          this.activeTab(index);
        }
      });
    }
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
    if (window.innerWidth > 700) {
      this.menuUL.addEventListener("scroll", this.scrollTab);
    }
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
