import AnimaNumeros from "./anima-numeros.js";

export default function animaisFetch(url, target) {
  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3> ${animal.specie} </h3> <span data-numero> ${animal.total} </span>`;
    return div;
  }

  // Preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os animais através de um arquivo json e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch e espera a resposta em Json, Transforma a resposta em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a tranformação de json, ativa as funções para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
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
