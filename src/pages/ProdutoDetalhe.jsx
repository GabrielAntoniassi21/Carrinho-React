
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarProdutoPorId } from "../services/produtoService";

function ProdutoDetalhe({ itens, adicionarProduto }) {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  const itemNoCarrinho = itens.find(
    (item) => String(item.id) === String(id)
  );

  const quantidadeNoCarrinho = itemNoCarrinho
    ? itemNoCarrinho.quantidade
    : 0;

  const limiteAtingido =
    produto && quantidadeNoCarrinho >= produto.estoque;

  useEffect(() => {
    async function carregarProduto() {
      try {
        setCarregando(true);
        setErro("");
        setProduto(null);
        setMensagem("");

        const dados = await buscarProdutoPorId(id);
        setProduto(dados);
      } catch (erroRecebido) {
        setErro(
          erroRecebido.message || "Erro ao carregar o produto."
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarProduto();
  }, [id]);

  function adicionarAoCarrinho() {
    if (!produto) return;

    const adicionado = adicionarProduto(produto);

    if (!adicionado) {
      setMensagem(
        `Limite de estoque atingido para ${produto.nome}.`
      );
      return;
    }

    const novaQuantidade = quantidadeNoCarrinho + 1;

    if (novaQuantidade >= produto.estoque) {
      setMensagem(
        `Limite de estoque atingido para ${produto.nome}.`
      );
    } else {
      setMensagem(`${produto.nome} adicionado ao carrinho!`);
    }
  }

  if (carregando) {
    return <p role="status">Carregando produto...</p>;
  }

  if (erro || !produto) {
    return (
      <main>
        <h1>Produto indisponível</h1>
        <p role="alert">
          {erro || "Produto não encontrado."}
        </p>
        <Link to="/produtos" className="botao-voltar-catalogo">
          ← Voltar ao catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="produto-detalhe">
      <Link to="/produtos">← Voltar ao catálogo</Link>

      <img src={produto.imagem} alt={produto.nome} />

      <p>{produto.categoria}</p>
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>

      <strong>
        {produto.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>

      <p>
        {produto.estoque > 0
          ? `Estoque disponível: ${produto.estoque}`
          : "Produto sem estoque"}
      </p>

      <p>Quantidade no carrinho: {quantidadeNoCarrinho}</p>

      <button
        type="button"
        onClick={adicionarAoCarrinho}
        disabled={produto.estoque <= 0 || limiteAtingido}
      >
        {produto.estoque <= 0
          ? "Sem estoque"
          : limiteAtingido
            ? "Limite de estoque atingido"
            : "Adicionar ao carrinho"}
      </button>

      {mensagem && <p role="status">{mensagem}</p>}

      <div className="produto-detalhe-acoes">
        <Link to="/carrinho" className="botao-ver-carrinho">
          Ver carrinho
        </Link>
      </div>
    </main>
  );
}

export default ProdutoDetalhe;
