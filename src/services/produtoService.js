const API_URL = "http://localhost:3001/produtos";

export async function buscarProdutos() {
  const resposta = await fetch(API_URL);

  if (!resposta.ok) {
    throw new Error("Não foi possível carregar os produtos.");
  }

  return resposta.json();
}

export async function buscarProdutoPorId(id) {
  const resposta = await fetch(`${API_URL}/${id}`);

  if (!resposta.ok) {
    throw new Error("Produto não encontrado.");
  }

  return resposta.json();
}
