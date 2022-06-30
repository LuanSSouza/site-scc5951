// Produtos Femininos
var produtosFemininos = [
  {
    img: "img/f1.jpg",
    name: "Tênis Blaze of Glory",
    title: "R$ 500,00",
    type: "Tênis casual",
  },
  {
    img: "img/f2.jpg",
    name: "Tênis Suede Classic",
    title: "R$ 400,00",
    type: "Tênis casual",
  },
  {
    img: "img/f3.jpg",
    name: "Tênis Run Falcon",
    title: "R$ 300,00",
    type: "Tênis de corrida",
  },
  {
    img: "img/f1.jpg",
    name: "Tênis Blaze of Glory",
    title: "R$ 500,00",
    type: "Tênis casual",
  },
  {
    img: "img/f2.jpg",
    name: "Tênis Suede Classic",
    title: "R$ 400,00",
    type: "Tênis casual",
  },
  {
    img: "img/f3.jpg",
    name: "Tênis Run Falcon",
    title: "R$ 300,00",
    type: "Tênis de corrida",
  },
];

// Produtos Recomendados
var produtosRecomendados = [
  {
    img: "img/m1.jpg",
    name: "Tênis Blaze of Glory",
    title: "R$ 500,00",
    type: "Tênis casual",
  },
  {
    img: "img/m2.jpg",
    name: "Tênis Suede Classic",
    title: "R$ 400,00",
    type: "Tênis casual",
  },
  {
    img: "img/m3.jpg",
    name: "Tênis Run Falcon",
    title: "R$ 300,00",
    type: "Tênis de corrida",
  },
  {
    img: "img/m1.jpg",
    name: "Tênis Blaze of Glory",
    title: "R$ 500,00",
    type: "Tênis casual",
  },
  {
    img: "img/m2.jpg",
    name: "Tênis Suede Classic",
    title: "R$ 400,00",
    type: "Tênis casual",
  },
  {
    img: "img/m3.jpg",
    name: "Tênis Run Falcon",
    title: "R$ 300,00",
    type: "Tênis de corrida",
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
  // Obtendo elemento de items feminino
  var listaFeminina = document.getElementById("linha-femenina");
  if (listaFeminina) {
    // Adicionando items feminino a tela
    produtosFemininos.forEach(function (item) {
      listaFeminina.appendChild(createCard(item));
    });
  }

  var listaRecomendados = document.getElementById("recomendados");
  if (listaRecomendados) {
    // Adicionar items recomendados a tela
    produtosRecomendados.forEach(function (item) {
      listaRecomendados.appendChild(createCard(item));
    });
  }
}

init();
