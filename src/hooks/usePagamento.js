import { useState } from "react";
import { processarPagamento } from "../utils/pagamento";

function usePagamento() {
  const [processando, setProcessando] = useState(false);

  async function realizarPagamento(numeroCartao) {
    setProcessando(true);

    try {
      await processarPagamento(numeroCartao);
      return true;
    } catch {
      return false;
    } finally {
      setProcessando(false);
    }
  }

  return {
    processando,
    realizarPagamento,
  };
}

export default usePagamento;