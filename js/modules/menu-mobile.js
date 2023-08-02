import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      const menus = [menuButton, menuLista];
      menus.forEach((item) => {
        item.classList.toggle("active");
        outsideClick(menuLista, eventos, () => {
          menus.forEach((item) => {
            item.classList.remove("active");
          });
        });
      });
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu, { passive: true });
    });
  }
}
