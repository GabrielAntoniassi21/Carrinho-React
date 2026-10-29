
import { describe, it, expect } from "vitest";
import { filtrarProdutos } from "./filtrarProdutos";

const produtos = [
  { id: 1, nome: "Camiseta Básica" },
  { id: 2, nome: "Calça Jeans" },
  { id: 3, nome: "Tênis Casual" },
];

describe("filtrarProdutos", () => {
  it("retorna todos os produtos quando a pesquisa está vazia", () => {
    expect(filtrarProdutos(produtos, "")).toEqual(produtos);
  });

  it("encontra produtos ignorando maiúsculas e minúsculas", () => {
    expect(filtrarProdutos(produtos, "CAMISETA")).toEqual([
      { id: 1, nome: "Camiseta Básica" },
    ]);
  });

  it("remove espaços extras nas pontas da pesquisa", () => {
    expect(filtrarProdutos(produtos, "  Calça  ")).toEqual([
      { id: 2, nome: "Calça Jeans" },
    ]);
  });

  it("retorna uma lista vazia quando não encontra correspondências", () => {
    expect(filtrarProdutos(produtos, "Mochila")).toEqual([]);
  });

  it("não altera a lista original de produtos", () => {
    const copiaOriginal = [...produtos];

    filtrarProdutos(produtos, "Tênis");

    expect(produtos).toEqual(copiaOriginal);
  });
});
