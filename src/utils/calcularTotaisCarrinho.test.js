
import { describe, it, expect } from "vitest";
import {
  calcularSubtotal,
  calcularTotalCarrinho,
} from "./calcularTotaisCarrinho";

describe("calcularSubtotal", () => {
  it("calcula o subtotal de um produto", () => {
    expect(calcularSubtotal({ preco: 59.9, quantidade: 2 })).toBeCloseTo(119.8);
  });

  it("retorna zero quando a quantidade é zero", () => {
    expect(calcularSubtotal({ preco: 59.9, quantidade: 0 })).toBe(0);
  });
});

describe("calcularTotalCarrinho", () => {
  it("soma os subtotais dos produtos", () => {
    const itens = [
      { preco: 59.9, quantidade: 2 },
      { preco: 129.9, quantidade: 1 },
      { preco: 199.9, quantidade: 1 },
    ];

    expect(calcularTotalCarrinho(itens)).toBeCloseTo(449.6);
  });

  it("retorna zero quando o carrinho está vazio", () => {
    expect(calcularTotalCarrinho([])).toBe(0);
  });
});
