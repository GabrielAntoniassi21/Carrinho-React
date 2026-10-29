
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import usePagamento from "../hooks/usePagamento";

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

function Pagamento({ itens, valorTotal, limparCarrinho }) {
  const navigate = useNavigate();
  const { processando, realizarPagamento } = usePagamento();
  const [pagamentoConcluido, setPagamentoConcluido] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(esquemaPagamento),
  });

  useEffect(() => {
    if (itens.length === 0 && !pagamentoConcluido) {
      navigate("/carrinho", { replace: true });
    }
  }, [itens.length, navigate, pagamentoConcluido]);

  if (itens.length === 0) return null;

  async function enviarPagamento(dados) {
    const pagamentoAprovado = await realizarPagamento(
      dados.numeroCartao
    );

    if (pagamentoAprovado) {
      setPagamentoConcluido(true);
      limparCarrinho();
      navigate("/sucesso");
    } else {
      navigate("/falha");
    }
  }

  return (
    <main>
      <h1>Pagamento</h1>

      <Link to="/carrinho">Voltar ao carrinho</Link>

      <p>
        Total da compra:{" "}
        {valorTotal.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <form onSubmit={handleSubmit(enviarPagamento)}>
        <div>
          <label htmlFor="titular">Titular do cartão</label>
          <input
            id="titular"
            type="text"
            aria-invalid={!!errors.titular}
            aria-describedby={
              errors.titular ? "erro-titular" : undefined
            }
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
            id="numeroCartao"
            type="text"
            aria-invalid={!!errors.numeroCartao}
            aria-describedby={
              errors.numeroCartao ? "erro-numero-cartao" : undefined
            }
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
            id="validade"
            type="text"
            placeholder="MM/AA"
            aria-invalid={!!errors.validade}
            aria-describedby={
              errors.validade ? "erro-validade" : undefined
            }
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
            id="cvv"
            type="text"
            aria-invalid={!!errors.cvv}
            aria-describedby={errors.cvv ? "erro-cvv" : undefined}
            {...register("cvv")}
          />
          {errors.cvv && (
            <p id="erro-cvv" role="alert">
              {errors.cvv.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={processando}>
          {processando ? "Processando compra..." : "Finalizar compra"}
        </button>
      </form>
    </main>
  );
}

export default Pagamento;
