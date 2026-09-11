function todosDigitosIguais(numeroCartao) {
  const numeroLimpo = numeroCartao.replace(/[\s-]/g, "");

  return (
    numeroLimpo.length === 16 &&
    numeroLimpo
      .split("")
      .every((digito) => digito === numeroLimpo[0])
  );
}

export default todosDigitosIguais;