// Inicializando index dos slides
var slideIndex = 0;

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
  cardLink.setAttribute("href", "produto.html");

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

  // Adicionando sidebar subitens
  var sidebarItens = document.getElementsByClassName("sidebar-item");
  var i;

  for (i = 0; i < sidebarItens.length; i++) {
    sidebarItens[i].addEventListener("click", function () {
      var subitem = this.nextElementSibling;
      if (!subitem || !subitem.classList.contains("sidebar-subitens")) return;
      if (subitem.style.display === "block") {
        subitem.style.display = "none";
      } else {
        subitem.style.display = "block";
      }
    });
  }
}

init();

// Buttons actions
function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0px";
}
