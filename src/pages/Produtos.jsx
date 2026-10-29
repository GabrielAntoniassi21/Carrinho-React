
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { buscarProdutos } from "../services/produtoService";
import { filtrarProdutos } from "../utils/filtrarProdutos";
import ProdutoCard from "../components/ProdutoCard";

function Produtos({ itens, adicionarProduto }) {
  const [produtos, setProdutos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [mensagemEstoque, setMensagemEstoque] = useState("");

  useEffect(() => {
    async function carregarProdutos() {
      try {
        setCarregando(true);
        setErro("");
        const dados = await buscarProdutos();
        setProdutos(dados);
      } catch (erroRecebido) {
        setErro(
          erroRecebido.message || "Erro ao carregar os produtos."
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarProdutos();
  }, []);

  const produtosFiltrados = useMemo(
    () => filtrarProdutos(produtos, pesquisa),
    [produtos, pesquisa]
  );

  function adicionarAoCarrinho(produto) {
    const itemExistente = itens.find(
      (item) => String(item.id) === String(produto.id)
    );

    const quantidadeAtual = itemExistente
      ? itemExistente.quantidade
      : 0;

    const adicionado = adicionarProduto(produto);

    if (!adicionado) {
      setMensagemEstoque(
        `Não foi possível adicionar ${produto.nome}. Limite de estoque atingido.`
      );
      return;
    }

    if (quantidadeAtual + 1 >= produto.estoque) {
      setMensagemEstoque(
        `Limite de estoque atingido para ${produto.nome}.`
      );
    } else {
      setMensagemEstoque(
        `${produto.nome} adicionado ao carrinho.`
      );
    }
  }

  if (carregando) {
    return <p role="status">Carregando produtos...</p>;
  }

  if (erro) {
    return (
      <main>
        <h1>Catálogo de produtos</h1>
        <p role="alert">{erro}</p>
        <button
          type="button"
          onClick={() => window.location.reload()}
        >
          Tentar novamente
        </button>
      </main>
    );
  }

  return (
    <main className="catalogo">
      <header className="catalogo-cabecalho">
        <h1>Catálogo de produtos</h1>
        <Link to="/carrinho">Ver carrinho</Link>
      </header>

      <label htmlFor="pesquisa-produtos">
        Pesquisar produtos
      </label>
      <input
        id="pesquisa-produtos"
        type="search"
        value={pesquisa}
        onChange={(evento) => setPesquisa(evento.target.value)}
        placeholder="Digite o nome de um produto..."
      />

      {mensagemEstoque && (
        <p role="status">{mensagemEstoque}</p>
      )}

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : produtosFiltrados.length === 0 ? (
        <div>
          <p>
            Nenhum produto encontrado para "{pesquisa}".
          </p>
          <button
            type="button"
            onClick={() => setPesquisa("")}
          >
            Limpar pesquisa
          </button>
        </div>
      ) : (
        <section
          className="produtos-grid"
          aria-label="Lista de produtos"
        >
          {produtosFiltrados.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
              aoAdicionar={adicionarAoCarrinho}
              quantidadeNoCarrinho={
                itens.find(
                  (item) =>
                    String(item.id) === String(produto.id)
                )?.quantidade ?? 0
              }
            />
          ))}
        </section>
      )}
    </main>
  );
}

export default Produtos;
