import produtos from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";
import { Link } from "react-router-dom";

function Carrinho() {
  const total = produtos.reduce(
    (soma, produto) => soma + produto.preco * produto.quantidade,
    0
  );

  return (
    <main className="pagina-carrinho">
      <h1>Meu Carrinho</h1>

      <section className="lista-produtos">
        {produtos.map((produto) => (
          <ItemCarrinho key={produto.id} produto={produto} />
        ))}
      </section>

      <ResumoCompra total={total} />

      <Link className="botao-principal" to="/pagamento">
        Finalizar compra
      </Link>
    </main>
  );
}

export default Carrinho;