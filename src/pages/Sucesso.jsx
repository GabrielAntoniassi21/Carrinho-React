import { Link } from "react-router-dom";

function Sucesso() {
  return (
    <main>
      <h1>Pagamento realizado com sucesso!</h1>

      <p>Sua compra foi concluída.</p>

      <Link to="/">Voltar ao carrinho</Link>
    </main>
  );
}

export default Sucesso;