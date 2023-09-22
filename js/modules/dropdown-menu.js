import outsideCLick from "./outside-click.js";

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropdownMenus = document.querySelectorAll(menus);
    this.activeClass = "ativo";

    // define touchstart e click como argumento padrão de events
    // caso não seja definido.
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropDown menu e adiciona a função que oberva o click fora
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideCLick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  //  adiciona os eventos ao dropDown menu
  addEventDropdown() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) this.addEventDropdown();
    return this;
  }
}
