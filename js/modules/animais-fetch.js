import initAnimaNumeros from "./anima-numeros.js";

export default function initAnimaisFetch() {
  async function puxarTotal() {
    function createAnimal(animal) {
      const div = document.createElement("div");
      div.classList.add("numero-animal");
      div.innerHTML = `<h3> ${animal.specie} </h3> <span data-numero> ${animal.total} </span>`;
      return div;
    }
    try {
      const dadosFetch = await fetch("../../animaisapi.json");
      const jsonArray = await dadosFetch.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      jsonArray.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  puxarTotal();
}

// MÉTODO DE REQUISIÇÃO FETCH e THEN mais usado em browse antigo

// fetch("../../animaisapi.json")
//   .then((r) => {
//     return r;
//   })
//   .then((r) => {
//     return r.json();
//   })
//   .then((array) => {
//     array.forEach((item) => {
//       console.log(item.total);
//     });
//   });

// MÉTODO COM ASYNC E AWAIT MAIS ORGANIZADO. método novo.
