import { Link } from "react-router-dom";

function Falha() {
  return (
    <main>
      <h1>Pagamento não autorizado</h1>

      <p>Não foi possível possível concluir sua compra.</p>

      <Link to="/pagamento">Tentar novamente</Link>
    </main>
  );
}

export default Falha;