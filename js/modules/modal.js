export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.modalContainer = document.querySelector(modalContainer);
    this.closeButton = document.querySelector(closeButton);
    this.openButton = document.querySelector(openButton);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  // abre e fecha o modal
  toggleModal() {
    this.modalContainer.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  clickOutModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvent() {
    [this.openButton, this.closeButton].forEach((item) => {
      item.addEventListener("click", this.eventToggleModal);
    });
    this.modalContainer.addEventListener("click", this.clickOutModal);
  }

  init() {
    if (this.closeButton && this.openButton && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
