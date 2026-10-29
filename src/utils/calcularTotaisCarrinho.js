
export function calcularSubtotal(item) {
  return item.preco * item.quantidade;
}

export function calcularTotalCarrinho(itens) {
  return itens.reduce(
    (total, item) => total + calcularSubtotal(item),
    0
  );
}
