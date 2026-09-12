# Carrinho de Compras em React

Mini-projeto desenvolvido para simular o fluxo de um carrinho de compras e o processamento de pagamento.

## Funcionalidades

- Exibição dos produtos do carrinho
- Cálculo do subtotal de cada produto
- Cálculo do valor total da compra
- Navegação entre páginas com React Router
- Formulário desenvolvido com React Hook Form
- Validação dos campos com Zod
- Exibição de mensagens de erro
- Validação do número do cartão, validade e CVV
- Identificação de cartões com todos os dígitos iguais
- Processamento assíncrono do pagamento
- Bloqueio do botão durante o processamento
- Páginas de pagamento aprovado e recusado
- Layout responsivo

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- React Router
- React Hook Form
- Zod
- CSS
- Git e GitHub

## Fluxo da aplicação

1. O usuário visualiza os produtos no carrinho.
2. A aplicação calcula o total da compra.
3. O usuário acessa a página de pagamento.
4. O formulário valida os dados informados.
5. O pagamento é processado de forma assíncrona.
6. Um cartão com todos os dígitos iguais é recusado.
7. Um cartão normal direciona para a página de sucesso.

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/GabrielAntoniassi21/Carrinho-React.git
```

Entre na pasta do projeto:

```bash
cd Carrinho-React
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado pelo Vite.

## Estrutura principal

```text
src/
├── assets/
│   └── styles/
│       └── index.css
├── components/
│   ├── ItemCarrinho.jsx
│   └── ResumoCompra.jsx
├── data/
│   └── produtos.js
├── hooks/
│   └── usePagamento.js
├── pages/
│   ├── Carrinho.jsx
│   ├── Pagamento.jsx
│   ├── Sucesso.jsx
│   └── Falha.jsx
├── utils/
│   └── pagamento.js
├── App.jsx
└── main.jsx
```

## Autor

Gabriel Antoniassi