import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuButton, menuLista, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuLista = document.querySelector(menuLista);

    // define touchstart e click como argumento padrão de events
    // caso não seja definido.
    if (eventos === undefined) this.eventos = ["touchstart", "click"];
    else this.eventos = eventos;

    // define this no openMenu na função de callback ao adicionar evento
    this.openMenu = this.openMenu.bind(this);
  }

  // abre e fecha os menus de acordo com a ativação dos eventos determinados
  openMenu() {
    const menus = [this.menuLista, this.menuButton];
    menus.forEach((menu) => {
      menu.classList.add("active");
    });
    outsideClick(this.menuLista, this.eventos, () => {
      menus.forEach((menu) => {
        menu.classList.remove("active");
      });
    });
  }

  addEventMenu() {
    this.eventos.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuLista) this.addEventMenu();
    return this;
  }
}
