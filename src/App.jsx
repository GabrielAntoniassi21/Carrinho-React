
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Carrinho from "./pages/Carrinho";
import Produtos from "./pages/Produtos";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import Pagamento from "./pages/Pagamento";
import Sucesso from "./pages/Sucesso";
import Falha from "./pages/Falha";

import {
  calcularSubtotal,
  calcularTotalCarrinho,
} from "./utils/calcularTotaisCarrinho";

function PaginaNaoEncontrada() {
  return (
    <main>
      <h1>404 - Página não encontrada</h1>
      <p>A página que você procura não existe.</p>
    </main>
  );
}

function App() {
  const [itens, setItens] = useState([]);

  function adicionarProduto(produto) {
    if (produto.estoque <= 0) return false;

    const itemExistente = itens.find(
      (item) => String(item.id) === String(produto.id)
    );

    if (itemExistente && itemExistente.quantidade >= produto.estoque) {
      return false;
    }

    if (itemExistente) {
      setItens((atuais) =>
        atuais.map((item) =>
          String(item.id) === String(produto.id)
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );
    } else {
      setItens((atuais) => [
        ...atuais,
        { ...produto, quantidade: 1 },
      ]);
    }

    return true;
  }

  function alterarQuantidade(id, quantidade) {
    const novaQuantidade = Number(quantidade);

    if (!Number.isInteger(novaQuantidade) || novaQuantidade < 1) {
      return;
    }

    setItens((atuais) =>
      atuais.map((item) =>
        String(item.id) === String(id)
          ? {
              ...item,
              quantidade: Math.min(novaQuantidade, item.estoque),
            }
          : item
      )
    );
  }

  function removerProduto(id) {
    setItens((atuais) =>
      atuais.filter((item) => String(item.id) !== String(id))
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const quantidadeTotal = itens.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const valorTotal = calcularTotalCarrinho(itens);

  const carrinho = {
    itens,
    adicionarProduto,
    alterarQuantidade,
    removerProduto,
    limparCarrinho,
    quantidadeTotal,
    valorTotal,
    valorUnitario: (item) => item.preco,
    subtotal: calcularSubtotal,
  };

  function comLayout(pagina) {
    return <Layout carrinho={carrinho}>{pagina}</Layout>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={comLayout(<Carrinho {...carrinho} />)}
        />
        <Route
          path="/carrinho"
          element={comLayout(<Carrinho {...carrinho} />)}
        />
        <Route
          path="/produtos"
          element={comLayout(<Produtos {...carrinho} />)}
        />
        <Route
          path="/produtos/:id"
          element={comLayout(<ProdutoDetalhe {...carrinho} />)}
        />
        <Route
          path="/pagamento"
          element={comLayout(<Pagamento {...carrinho} />)}
        />
        <Route
          path="/sucesso"
          element={comLayout(<Sucesso />)}
        />
        <Route
          path="/falha"
          element={comLayout(<Falha />)}
        />
        <Route
          path="*"
          element={comLayout(<PaginaNaoEncontrada />)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
