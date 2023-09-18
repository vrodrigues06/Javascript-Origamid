export default function initModal() {
  const modalContainer = document.querySelector('[data-modal="container"]');
  const closeButton = document.querySelector('[data-modal="close"]');
  const openButton = document.querySelector('[data-modal="open"]');
  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }
  function clickOutModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }
  if (closeButton && openButton && modalContainer) {
    [openButton, closeButton].forEach((item) => {
      item.addEventListener("click", toggleModal);
    });
    modalContainer.addEventListener("click", clickOutModal);
  }
}
