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
    <main>
      <h1>Meu Carrinho</h1>

      {produtos.map((produto) => (
        <ItemCarrinho key={produto.id} produto={produto} />
        ))}

      <ResumoCompra total={total} />

      <h2>Total: R$ {total.toFixed(2)}</h2>
    </main>
  );
}

export default Carrinho;