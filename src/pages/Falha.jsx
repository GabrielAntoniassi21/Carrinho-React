import { Link } from "react-router-dom";

function Falha() {
  return (
    <main>
      <h1>Tentativa de golpe.</h1>

      <p>Não foi possível concluir sua compra.</p>

      <Link to="/pagamento">Tentar novamente</Link>
    </main>
  );
}

export default Falha;