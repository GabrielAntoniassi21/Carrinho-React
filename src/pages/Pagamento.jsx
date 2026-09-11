import produtos from "../data/produtos";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const esquemaPagamento = z.object({
  titular: z.string(),
  numeroCartao: z.string(),
  validade: z.string(),
  cvv: z.string(),
});



function Pagamento() {

const total = produtos.reduce(
  (soma, produto) => soma + produto.preco * produto.quantidade,
  0
);

const { register, handleSubmit } = useForm({
  resolver: zodResolver(esquemaPagamento),
});

function enviarPagamento(dados) {
  console.log(dados);
}

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

      <form onSubmit={handleSubmit(enviarPagamento)}>
        <div>
            <label htmlFor="titular">Titular do cartão</label>
                <input
                id="titular"
                name="titular"
                type="text"
                {...register("titular")}
                />
        </div>
        <div>
            <label htmlFor="numeroCartao">Número do cartão</label>
                <input
                id="numeroCartao"
                name="numeroCartao"
                type="text"
                {...register("numeroCartao")}
                />
        </div>
        <div>
            <label htmlFor="validade">Validade</label>  
                <input
                id="validade"
                name="validade"
                type="text"
                placeholder="MM/AA"
                {...register("validade")}
                />
        </div>
        <div>
            <label htmlFor="cvv">CVV</label>
                <input
                id="cvv"
                name="cvv"
                type="text"
                {...register("cvv")}
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