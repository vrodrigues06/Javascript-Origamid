export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // ativa tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const { anime } = this.tabContent[index].dataset;
    this.tabContent[index].classList.add(this.activeClass, anime);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
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
