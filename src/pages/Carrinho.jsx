import produtos from "../data/produtos";


function Carrinho() {
  const total = produtos.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0
  );

  return (
    <main>
      <h1>Meu Carrinho</h1>

      {produtos.map((produto) => {
        const subtotal = produto.preco * produto.quantidade;

        return (
          <div key={produto.id}>
            <h2>{produto.nome}</h2>

            <p>Preço unitário: R$ {produto.preco.toFixed(2)}</p>

            <p>Quantidade: {produto.quantidade}</p>

            <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
          </div>
        );
      })}

      <h2>Total: R$ {total.toFixed(2)}</h2>
    </main>
  );
}

export default Carrinho;