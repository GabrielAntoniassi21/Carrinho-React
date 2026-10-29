export function filtrarProdutos(produtos, pesquisa) {
  const termo = pesquisa.trim().toLocaleLowerCase("pt-BR");

  if (!termo) {
    return produtos;
  }

  return produtos.filter((produto) =>
    produto.nome.toLocaleLowerCase("pt-BR").includes(termo)
  );
}