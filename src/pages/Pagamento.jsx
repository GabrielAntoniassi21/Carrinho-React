import produtos from "../data/produtos";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const esquemaPagamento = z.object({
  titular: z
    .string()
    .trim()
    .min(1, "Informe o titular do cartão"),

  numeroCartao: z.string().refine(
    (valor) => {
      const numeroLimpo = valor.replace(/[\s-]/g, "");
      return /^\d{16}$/.test(numeroLimpo);
    },
    {
      message: "O cartão deve possuir 16 dígitos",
    }
  ),

  validade: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Informe uma validade no formato MM/AA"
    ),

  cvv: z
    .string()
    .regex(/^\d{3}$/, "O CVV deve possuir 3 dígitos"),
});



function Pagamento() {

const total = produtos.reduce(
  (soma, produto) => soma + produto.preco * produto.quantidade,
  0
);

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
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
                      aria-invalid={!!errors.titular}
                      aria-describedby={errors.titular ? "erro-titular" : undefined}
                    id="titular"
                    type="text"
                    {...register("titular")}
                    />
                    {errors.titular && (
                    <p id="erro-titular" role="alert">
                      {errors.titular.message}
                    </p>
                )}
        </div>
        <div>
            <label htmlFor="numeroCartao">Número do cartão</label>
                <input
                    aria-invalid={!!errors.numeroCartao}
                    aria-describedby={
                  errors.numeroCartao ? "erro-numero-cartao" : undefined
                  }
                  id="numeroCartao"
                  type="text"
                  {...register("numeroCartao")}
                  />
                  {errors.numeroCartao && (
                    <p id="erro-numero-cartao" role="alert">
                      {errors.numeroCartao.message}
                    </p>
                  )}
        </div>
        <div>
            <label htmlFor="validade">Validade</label>  
                <input
                    aria-invalid={!!errors.validade}
                    aria-describedby={errors.validade ? "erro-validade" : undefined}  
                  id="validade"
                  type="text"
                  placeholder="MM/AA"
                  {...register("validade")}
                  />
                  {errors.validade && (
                    <p id="erro-validade" role="alert">
                      {errors.validade.message}
                    </p>
                  )}
        </div>
        <div>
            <label htmlFor="cvv">CVV</label>
                <input
                    aria-invalid={!!errors.cvv}
                    aria-describedby={errors.cvv ? "erro-cvv" : undefined}
                  id="cvv"
                  type="text"
                  {...register("cvv")}
                  />
                  {errors.cvv && (
                    <p id="erro-cvv" role="alert">
                      {errors.cvv.message}
                    </p>
)}
        </div>
        <button type="submit">
            Finalizar compra
        </button>
      </form>
    </main>
  );
}

export default Pagamento;