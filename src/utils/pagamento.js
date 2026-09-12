function todosDigitosIguais(numeroCartao) {
  const numeroLimpo = numeroCartao.replace(/[\s-]/g, "");

  return (
    numeroLimpo.length === 16 &&
    numeroLimpo
      .split("")
      .every((digito) => digito === numeroLimpo[0])
  );
}

export function processarPagamento(numeroCartao) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (todosDigitosIguais(numeroCartao)) {
        reject(new Error("Pagamento recusado"));
      } else {
        resolve("Pagamento aprovado");
      }
    }, 2000);
  });
}

export default todosDigitosIguais;