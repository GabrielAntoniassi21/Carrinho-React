
import { describe, it, expect, vi, afterEach } from "vitest";
import todosDigitosIguais, { processarPagamento } from "./pagamento";

describe("todosDigitosIguais", () => {
  it("retorna true quando os 16 dígitos são iguais", () => {
    expect(todosDigitosIguais("1111111111111111")).toBe(true);
  });

  it("retorna false quando os dígitos são diferentes", () => {
    expect(todosDigitosIguais("1234567890123456")).toBe(false);
  });

  it("aceita cartões separados por espaços ou hífens", () => {
    expect(todosDigitosIguais("1111-1111-1111-1111")).toBe(true);
  });

  it("retorna false quando o número não tem 16 dígitos", () => {
    expect(todosDigitosIguais("111111")).toBe(false);
  });
});

describe("processarPagamento", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("aprova um cartão com dígitos diferentes", async () => {
    vi.useFakeTimers();

    const pagamento = processarPagamento("1234567890123456");
    await vi.advanceTimersByTimeAsync(2000);

    await expect(pagamento).resolves.toBe("Pagamento aprovado");
  });

  
it("recusa um cartão com todos os dígitos iguais", async () => {
  vi.useFakeTimers();

  const pagamento = processarPagamento("1111111111111111");

  const verificacao = expect(pagamento).rejects.toThrow(
    "Pagamento recusado"
  );

  await vi.advanceTimersByTimeAsync(2000);
  await verificacao;
});
})
