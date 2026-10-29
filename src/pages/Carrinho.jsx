
import { Link } from "react-router-dom";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";

function Carrinho({
  itens,
  alterarQuantidade,
  removerProduto,
  quantidadeTotal,
  valorTotal,
}) {
  return (
    <main className="pagina-carrinho">
      <h1>Meu Carrinho</h1>

      {itens.length === 0 ? (
        <section>
          <p>Seu carrinho está vazio.</p>
          <Link className="botao-principal" to="/produtos">
            Ver produtos
          </Link>
        </section>
      ) : (
        <>
          <Link className="botao-principal" to="/produtos">
            Continuar comprando
          </Link>

          <p>Quantidade de itens: {quantidadeTotal}</p>

          <section className="lista-produtos">
            {itens.map((produto) => (
              <div key={produto.id}>
                <ItemCarrinho produto={produto} />

                <label htmlFor={`quantidade-${produto.id}`}>
                  Quantidade de {produto.nome}
                </label>

                <input
                  id={`quantidade-${produto.id}`}
                  type="number"
                  min="1"
                  max={produto.estoque}
                  value={produto.quantidade}
                  onChange={(evento) =>
                    alterarQuantidade(produto.id, evento.target.value)
                  }
                />

                <button
                  type="button"
                  onClick={() => removerProduto(produto.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </section>

          <ResumoCompra total={valorTotal} />

          <Link className="botao-principal" to="/pagamento">
            Finalizar compra
          </Link>
        </>
      )}
    </main>
  );
}

export default Carrinho;
