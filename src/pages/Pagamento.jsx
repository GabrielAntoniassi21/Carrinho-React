import produtos from "../data/produtos";

function Pagamento() {

const total = produtos.reduce(
  (soma, produto) => soma + produto.preco * produto.quantidade,
  0
);

  return (
    <main>
      <h1>Pagamento</h1>

      <p>
        Total da compra:{" "}
        {total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <form>
        <div>
            <label htmlFor="titular">Titular do cartão</label>
                <input
                id="titular"
                name="titular"
                type="text"
                />
        </div>
        <div>
            <label htmlFor="numeroCartao">Número do cartão</label>
                <input
                id="numeroCartao"
                name="numeroCartao"
                type="text"
                />
        </div>
        <div>
            <label htmlFor="validade">Validade</label>  
                <input
                id="validade"
                name="validade"
                type="text"
                placeholder="MM/AA"
                />
        </div>
        <div>
            <label htmlFor="cvv">CVV</label>
                <input
                id="cvv"
                name="cvv"
                type="text"
                />
        </div>
        <button type="submit">
            Finalizar compra
        </button>
      </form>
    </main>
  );
}

export default Pagamento;