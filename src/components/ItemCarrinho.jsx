function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade;

  return (
    <div>
      <h2>{produto.nome}</h2>

      <p>Preço unitário: R$ {produto.preco.toFixed(2)}</p>

      <p>Quantidade: {produto.quantidade}</p>

      <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
    </div>
  );
}

export default ItemCarrinho;