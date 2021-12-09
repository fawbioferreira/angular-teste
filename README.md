## Amostra online
Utilize o sistema rodando online no seguinte endereço: https://www.devinnovation.com.br/teste-wk
# Pré Requisitos
##  Ferramentas necessárias
 - Angular Cli;
 - Node.js;
 - Npm;

## Instalação
- Primeiro clone o repositório com o comando:

    git clone https://github.com/fawbioferreira/angular-teste.git
    `git clone https://github.com/fawbioferreira/angular-teste.git`

- Abra a pasta do raiz do projeto no terminal e execute o comando:
`npm i`

# Como funciona
## Login
O projeto utiliza o banco de dados não relacional Firestore do Firebase, para fazer login utilize o usuário previamente cadastrado: teste@teste.com  senha: 123456.
Esse projeto não possui cadastro de usuários
## Clientes
Nessa tela são exibidos todos o clientes cadastrados no banco de dados. Também é possível cadastrar novos clientes clicando em "cadastrar", atentando-se para preencher todos os campos. Clientes cadastrados são persistidos.
## Produtos
Similar à tela anterior, nessa tela são exibidos os produtos cadastrados no banco de dados. Também é possível cadastrar novos produtos clicando em "cadastrar".
## Pedidos
Os pedidos exibidos nessa tela são obtidos a partir do banco de dados, porém não é possível cadastrar novos produtos através do sistema. Os produtos contidos nos pedidos foram inseridos nos mesmo de forma manual.
Ao exibir os detalhes do pedido, o pedido selecionado é enviado ao novo componente através de uma "service" (poderia ter utilizado input/output), nesse componente de detalhes os únicos itens obtidos do banco são os produtos que estão no pedido armazenados como um array de objetos em forma de string. É feito um "parse" e então obtido os produtos através do  id da sua collection.
## Proteção de rotas
É utilizado o um guard para proteger endpoints da url. Esse guard é responsável por verificar no AuthenticationService se a variável que armazena o usuário autenticado existe. Na service AuthenticationService existe a função de login, que verifica se a senha digitada coincide com a senha do usuário armazenado no banco (só existe um usuário), caso positivo armazena o usuário autenticado em uma variável.
 
