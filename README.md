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

## Depuração

Durante o desenvolvimento, utilizei o console e as ferramentas de desenvolvedor do navegador para investigar um erro de uso de hooks. O erro ocorreu porque o `useForm` havia sido chamado fora do componente `Pagamento`. Após analisar a mensagem `Invalid hook call`, movi o hook para o nível superior do componente, respeitando as regras dos hooks do React.

## Organização das tarefas

As tarefas do projeto foram organizadas em um quadro do Trello:

[Visualizar quadro no Trello](https://trello.com/invite/b/6aa4d55d50ef566b89403ce2/ATTI4f673d1775a38654a69559d3cd32c3934B33B2D1/carrinho-react)

## Vídeo de apresentação

[Assistir à apresentação do projeto](https://drive.google.com/file/d/1jQCzHd-5f7aJNdHZupyqOTD9-xaYX1m1/view?usp=sharing)

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

## Melhorias futuras

- Permitir alteração das quantidades dos produtos
- Permitir remoção de itens do carrinho
- Aplicar máscaras nos campos do cartão
- Adicionar testes automatizados
- Melhorar a identidade visual da loja

## Autor

Gabriel Antoniassi