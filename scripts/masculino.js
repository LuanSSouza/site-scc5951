function init() {
  // Obtendo elemento de items feminino
  var listaMasculina = document.getElementById("linha-masculina");
  if (listaMasculina) {
    // Adicionando items feminino a tela
    produtosMasculinos.forEach(function (item) {
      listaMasculina.append(createCard(item));
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
