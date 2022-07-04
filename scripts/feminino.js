function init() {
  // Obtendo elemento de items feminino
  var listaFeminina = document.getElementById("linha-femenina");
  if (listaFeminina) {
    // Adicionando items feminino a tela
    produtosFemininos.forEach(function (item) {
      listaFeminina.append(createCard(item));
    });
  }

  var listaRecomendados = document.getElementById("recomendados");
  if (listaRecomendados) {
    // Adicionar items recomendados a tela
    produtosRecomendados.forEach(function (item) {
      listaRecomendados.append(createCard(item));
    });
  }
}

init();
