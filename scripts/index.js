// Criando dados dos cards novidades
var novidades = [
  {
    img: "img/tenis1.jpg",
    name: "Tenis de corrida",
    title: "R$ 300,00",
    type: "Corrida Casual",
  },
  {
    img: "img/tenis1.jpg",
    name: "Tenis de corrida",
    title: "R$ 300,00",
    type: "Corrida Casual",
  },
];

// Criando dados dos cards populares
var populares = [
  {
    img: "img/tenis1.jpg",
    name: "Tenis de corrida",
    title: "R$ 300,00",
    type: "Corrida Casual",
  },
];

function createCard(value) {
  // Criando card
  var card = document.createElement("div");
  card.className = "card";

  // Criando imagem
  var cardImage = document.createElement("img");
  cardImage.setAttribute("src", value.img);
  cardImage.setAttribute("alt", value.name);

  // Adicionando imagem ao card
  card.appendChild(cardImage);

  // Adicionando textos ao card
  card.innerHTML += `<p><b>${value.title}</b></p> <p>${value.name}</p> <p>${value.type}</p>`;

  return card;
}

function init() {
  // Obtendo elemento de items populares
  var listaPopulares = document.getElementById("lista-populares");

  // Adicionando items populares a tela
  populares.forEach(function (item) {
    listaPopulares.appendChild(createCard(item));
  });

  // Obtendo elemento de items novidades
  var listaNovidades = document.getElementById("lista-novidades");

  // Adicionando items novidades a tela
  novidades.forEach(function (item) {
    listaNovidades.appendChild(createCard(item));
  });
}

init();
