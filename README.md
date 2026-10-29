# Carrinho React — Loja Virtual

## 📌 Sobre o projeto

O **Carrinho React** é uma aplicação de loja virtual desenvolvida como mini-projeto avaliativo do módulo de Front-End com React. O objetivo é simular a experiência de navegação por produtos, gerenciamento do carrinho e finalização de uma compra, com validação de formulário e simulação de pagamento.

A aplicação foi desenvolvida com React, JavaScript e CSS, utilizando componentes reutilizáveis, propriedades (*props*), gerenciamento de estado, hooks e navegação entre páginas.

## 🎯 Funcionalidades

- Catálogo de produtos carregado por meio de uma API simulada.
- Pesquisa de produtos pelo nome.
- Visualização dos detalhes dos produtos.
- Adição e remoção de produtos do carrinho.
- Alteração de quantidades respeitando o estoque disponível.
- Cálculo automático de subtotais e valor total da compra.
- Menu lateral para visualizar o carrinho.
- Formulário de pagamento com validação dos campos.
- Simulação de processamento e aprovação ou recusa do pagamento.
- Telas de sucesso e falha na finalização da compra.
- Interface responsiva para diferentes tamanhos de tela.

## 🛠️ Tecnologias utilizadas

- **React** — construção da interface por componentes.
- **JavaScript (ES6+)** — lógica e funcionalidades da aplicação.
- **HTML e JSX** — estrutura das páginas.
- **CSS** — estilização e responsividade.
- **React Router** — navegação entre páginas.
- **React Hook Form** — gerenciamento do formulário de pagamento.
- **Zod** — validação dos dados do formulário.
- **JSON Server** — simulação de uma API REST para os produtos.
- **Vitest** — execução dos testes automatizados.
- **Vite** — ambiente de desenvolvimento e build.
- **Git e GitHub** — controle de versão e organização do desenvolvimento.

## ⚙️ Como executar o projeto

### Pré-requisitos

- Node.js e npm instalados.
- Git instalado, caso o projeto seja clonado pelo repositório.

### 1. Clonar o repositório

```bash
git clone https://github.com/GabrielAntoniassi21/Carrinho-React.git
cd Carrinho-React
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Iniciar a API simulada

Em um terminal, execute:

```bash
npm run api
```

A API ficará disponível na porta `3001`, utilizada para carregar os produtos.

### 4. Iniciar a aplicação React

Em outro terminal, dentro da pasta do projeto, execute:

```bash
npm run dev
```

O Vite exibirá o endereço local para acessar a aplicação pelo navegador.

**Importante:** mantenha os dois terminais abertos enquanto utiliza a aplicação.

## 🧪 Testes e verificações

O projeto possui testes automatizados para validar cálculos, filtragem de produtos e regras de pagamento.

Para executar os testes:

```bash
npm test -- --run
```

Para verificar o código com ESLint:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```

Na última verificação realizada, o ESLint não apresentou erros, os 15 testes automatizados passaram e o build de produção foi concluído com sucesso.

## 🐞 Depuração

Durante o desenvolvimento, foi identificado um erro `Invalid hook call` relacionado ao uso do React Hook Form.

A investigação mostrou que o hook `useForm` havia sido chamado fora do componente `Pagamento`. A correção consistiu em mover a chamada para o nível superior do componente, respeitando as regras dos hooks do React.

Após a alteração, o fluxo de pagamento voltou a funcionar corretamente.

## 🗂️ Organização das tarefas

O desenvolvimento foi organizado em etapas, contemplando a estrutura inicial da aplicação, a criação dos componentes e páginas, a estilização da interface, a implementação do carrinho, a integração com a API, a validação do pagamento e a execução de testes.

O acompanhamento das atividades foi realizado por meio do Trello.

**Quadro do Trello:** [Visualizar quadro no Trello](https://trello.com/invite/b/6ad019248a27b2cb1ee38fa7/ATTI96688121aa0ff3247849bbb5877cd53e1B5A7532/e-commerce-react-projeto-avaliativo-modulo-2)

## 🌿 Versionamento

O projeto utiliza Git e GitHub para acompanhar a evolução do desenvolvimento, com branches destinadas à organização das funcionalidades e commits com descrições das alterações realizadas.

**Repositório:** [Carrinho-React no GitHub](https://github.com/GabrielAntoniassi21/Carrinho-React)

O histórico de branches e commits pode ser consultado diretamente no repositório.

## 🚀 Melhorias futuras

Algumas melhorias que poderiam ser implementadas em versões futuras:

- Persistência do carrinho entre atualizações da página.
- Integração com um back-end e banco de dados reais.
- Autenticação e gerenciamento de usuários.
- Filtros adicionais por categoria e faixa de preço.
- Melhorias de acessibilidade e experiência do usuário.
- Integração com um serviço de pagamento real, com os cuidados de segurança necessários.

## 🎥 Vídeo de apresentação

**Vídeo demonstrativo:** [Assistir à apresentação do projeto](https://drive.google.com/file/d/1jQCzHd-5f7aJNdHZupyqOTD9-xaYX1m1/view?usp=sharing)

O vídeo deverá apresentar o objetivo do sistema, seu funcionamento, os comandos necessários para executá-lo, a organização das tarefas, as branches utilizadas e possíveis melhorias para o projeto.

O acesso ao vídeo deverá estar configurado como **qualquer pessoa com o link pode visualizar**.

## 🤖 Uso de inteligência artificial

Ferramentas de inteligência artificial foram utilizadas como apoio durante o desenvolvimento, auxiliando na análise de problemas, compreensão de conceitos e revisão de soluções.

As sugestões foram verificadas e testadas durante o desenvolvimento. O código entregue deve ser compreendido e explicado pelo desenvolvedor.

## 👨‍💻 Autor

**Gabriel Antoniassi**

Projeto desenvolvido para fins acadêmicos no módulo de Front-End com React.
