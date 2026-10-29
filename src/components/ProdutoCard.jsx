
import { Link } from "react-router-dom";

function ProdutoCard({
  produto,
  aoAdicionar,
  quantidadeNoCarrinho = 0,
}) {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const limiteAtingido =
    quantidadeNoCarrinho >= produto.estoque;

  return (
    <article className="produto-card">
      <Link
        to={`/produtos/${produto.id}`}
        aria-label={`Ver detalhes de ${produto.nome}`}
      >
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="produto-card-imagem"
        />
      </Link>

      <div className="produto-card-conteudo">
        <p>{produto.categoria}</p>
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <strong>{precoFormatado}</strong>

        <div className="produto-card-acoes">
          <button
            type="button"
            onClick={() => aoAdicionar(produto)}
            disabled={produto.estoque <= 0 || limiteAtingido}
          >
            {produto.estoque <= 0
              ? "Sem estoque"
              : limiteAtingido
                ? "Limite de estoque atingido"
                : "Adicionar ao carrinho"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProdutoCard;
