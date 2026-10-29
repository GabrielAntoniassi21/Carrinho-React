
import { useState } from "react";
import { Link } from "react-router-dom";
import CarrinhoLateral from "./CarrinhoLateral";

function Layout({ carrinho, children }) {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  const { quantidadeTotal } = carrinho;

  function fecharCarrinho() {
    setCarrinhoAberto(false);
  }

  return (
    <>
      <header className="cabecalho">
        <nav>
          <Link to="/" className="logo-loja">
            Minha Loja
          </Link>

          <div className="cabecalho-acoes">
            <Link to="/produtos">Produtos</Link>

            <button
              type="button"
              className="botao-icone-carrinho"
              onClick={() => setCarrinhoAberto(true)}
              aria-label={`Abrir carrinho com ${quantidadeTotal} itens`}
              aria-expanded={carrinhoAberto}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              <span className="contador-carrinho">
                {quantidadeTotal}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {children}

      <footer className="rodape">
        <p>Minha Loja — Todos os direitos reservados.</p>
      </footer>

      <CarrinhoLateral
        {...carrinho}
        aberto={carrinhoAberto}
        aoFechar={fecharCarrinho}
      />
    </>
  );
}

export default Layout;
