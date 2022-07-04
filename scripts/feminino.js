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
