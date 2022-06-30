// Criando dados dos slides
var slides = [
  {
    img: "img/slider_1.png",
    name: "Banner",
    text: "Até 75% OFF",
  },
  {
    img: "img/slider_1.png",
    name: "Banner",
    text: "Até 75% OFF",
  },
];

// Inicializando index dos slides
var slideIndex = 0;

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

function createSlide(value) {
  // Criando slide
  var slide = document.createElement("div");
  slide.className = "slide";

  // Criando imagem
  var slideImage = document.createElement("img");
  slideImage.setAttribute("src", value.img);
  slideImage.setAttribute("alt", value.name);

  // Adicionando imagem ao slide
  slide.appendChild(slideImage);

  return slide;
}

function createCard(value) {
  // Criando card
  var card = document.createElement("div");
  card.className = "card";

  // Criando link para o card
  var cardLink = document.createElement("a");

  // Criando imagem
  var cardImage = document.createElement("img");
  cardImage.setAttribute("src", value.img);
  cardImage.setAttribute("alt", value.name);

  // Adicionando imagem ao card
  card.appendChild(cardImage);

  // Adicionando textos ao card
  card.innerHTML += `<p><b>${value.title}</b></p> <p>${value.name}</p> <p>${value.type}</p>`;

  cardLink.appendChild(card);
  cardLink.setAttribute('href', 'produto.html');

  return cardLink;
}

function showSlide(index) {
  // Obtendo elementos com a classe "slide"
  var slideElements = document.getElementsByClassName("slide");

  // Tornando slide visível
  slideElements[index].style.display = "block";
}

function init() {
  // Obtendo elemento de slider
  var slidesContainer = document.getElementById("slides-container");

  if (slidesContainer) {
    // Adicionando banners novidades a tela
    slides.forEach(function (item) {
      slidesContainer.appendChild(createSlide(item));
    });

    // Tornando slide inicial visível
    showSlide(slideIndex);
  }

  // Obtendo elemento de items novidades
  var listaNovidades = document.getElementById("lista-novidades");

  if (listaNovidades) {
    // Adicionando items novidades a tela
    novidades.forEach(function (item) {
      listaNovidades.appendChild(createCard(item));
    });
  }

  // Obtendo elemento de items populares
  var listaPopulares = document.getElementById("lista-populares");

  if (listaNovidades) {
    // Adicionando items populares a tela
    populares.forEach(function (item) {
      listaPopulares.appendChild(createCard(item));
    });
  }
}

init();
