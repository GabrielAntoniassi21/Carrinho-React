function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade;

  return (
    <article className="item-carrinho">
      <h2>{produto.nome}</h2>
      <p>Preço unitário: R$ {produto.preco.toFixed(2)}</p>
      <p>Quantidade: {produto.quantidade}</p>
      <p className="subtotal">
        Subtotal: R$ {subtotal.toFixed(2)}
      </p>
    </article>
  );
}

export default ItemCarrinho;