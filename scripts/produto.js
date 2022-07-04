function init() {
  var listaRecomendados = document.getElementById("recomendados");
  if (listaRecomendados) {
    // Adicionar items recomendados a tela
    produtosRecomendados.forEach(function (item) {
      listaRecomendados.append(createCard(item));
      //listaRecomendados.ap
    });
  }
}

init();
