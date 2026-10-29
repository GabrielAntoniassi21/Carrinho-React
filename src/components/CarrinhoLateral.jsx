
import { useEffect } from "react";
import { Link } from "react-router-dom";

const formatarPreco = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);

function CarrinhoLateral({
  aberto,
  aoFechar,
  itens,
  alterarQuantidade,
  removerProduto,
  quantidadeTotal,
  valorTotal,
}) {
  useEffect(() => {
    if (!aberto) return;

    function fecharComEscape(evento) {
      if (evento.key === "Escape") {
        aoFechar();
      }
    }

    document.addEventListener("keydown", fecharComEscape);

    return () => {
      document.removeEventListener("keydown", fecharComEscape);
    };
  }, [aberto, aoFechar]);

  if (!aberto) return null;

  return (
    <div className="carrinho-overlay" onClick={aoFechar}>
      <aside
        className="carrinho-lateral"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-carrinho-lateral"
        onClick={(evento) => evento.stopPropagation()}
      >
        <div className="carrinho-lateral-cabecalho">
          <h2 id="titulo-carrinho-lateral">Meu carrinho</h2>
          <button
            type="button"
            className="carrinho-lateral-fechar"
            onClick={aoFechar}
            aria-label="Fechar carrinho"
          >
            ×
          </button>
        </div>

        {itens.length === 0 ? (
          <div className="carrinho-lateral-vazio">
            <p>Seu carrinho está vazio.</p>
            <Link
              className="botao-principal"
              to="/produtos"
              onClick={aoFechar}
            >
              Ver produtos
            </Link>
          </div>
        ) : (
          <>
            <div className="carrinho-lateral-itens">
              {itens.map((produto) => (
                <article
                  className="carrinho-lateral-item"
                  key={produto.id}
                >
                  {produto.imagem && (
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                      className="carrinho-lateral-imagem"
                    />
                  )}

                  <div className="carrinho-lateral-detalhes">
                    <h3>{produto.nome}</h3>
                    <p className="carrinho-lateral-preco">
                      {formatarPreco(produto.preco)}
                    </p>

                    <div className="carrinho-lateral-controles">
                      <button
                        type="button"
                        aria-label={`Diminuir quantidade de ${produto.nome}`}
                        disabled={produto.quantidade <= 1}
                        onClick={() =>
                          alterarQuantidade(
                            produto.id,
                            produto.quantidade - 1
                          )
                        }
                      >
                        −
                      </button>

                      <span>{produto.quantidade}</span>

                      <button
                        type="button"
                        aria-label={`Aumentar quantidade de ${produto.nome}`}
                        disabled={produto.quantidade >= produto.estoque}
                        onClick={() =>
                          alterarQuantidade(
                            produto.id,
                            produto.quantidade + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="carrinho-lateral-subtotal">
                      Subtotal:{" "}
                      {formatarPreco(produto.preco * produto.quantidade)}
                    </p>

                    <button
                      type="button"
                      className="carrinho-lateral-remover"
                      onClick={() => removerProduto(produto.id)}
                    >
                      Remover
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="carrinho-lateral-rodape">
              <p>
                Quantidade de itens: <strong>{quantidadeTotal}</strong>
              </p>
              <p className="carrinho-lateral-total">
                Total: {formatarPreco(valorTotal)}
              </p>

              <Link
                className="botao-principal carrinho-lateral-finalizar"
                to="/pagamento"
                onClick={aoFechar}
              >
                Finalizar compra
              </Link>

              <Link
                className="carrinho-lateral-ver-completo"
                to="/carrinho"
                onClick={aoFechar}
              >
                Ver carrinho completo
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default CarrinhoLateral;
