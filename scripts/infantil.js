function init() {
  // Obtendo elemento de items feminino
  var listaInfantil = document.getElementById("linha-infantil");
  if (listaInfantil) {
    // Adicionando items feminino a tela
    produtosInfantis.forEach(function (item) {
      listaInfantil.append(createCard(item));
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
