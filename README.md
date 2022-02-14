Importante - a aplicação foi criada por cima de uma Template.
Portanto, deve ser clonada.

de git clone, depois, npm install, npm start.
</br>



Rotas da Api:
</br>
método post: "localhost:4000/login" -> Checa por usuário e senha válidos no DB
</br>
método post: "localhost:4000/balance" -> envia o login do usuário e tem como resposta o saldo do usuário
</br>
método post: "localhost:4000/user/create" -> Cria um usuário novo no banco de dados.
</br>
método post: "localhost:4000/movimentacao/create" -> Cria uma nova transferencia entre usuários e atualiza as tabelas do banco de dados de saldo e movimentação.
</br>
------------------ Back-end ------------------
</br>
Ao dar o comando npm start, a aplicação vai criar o próprio banco em um docker, com os respectivos .env
A aplicação vai subir o banco automaticamente quando for inicializada e vai gerar o próprio .env de moto automático.

as configurações do DB estão na pasta /api/config.js

As respectivas tabelas do banco são populadas no início da aplicação.
Não existe um usuário padrão criado, será necessário criar um utilizando a rota.

Minha maior dificuldade foi com relação as fazer as indicações de chaves estrangeiras na própria criação automatizada da tabela, como é algo que só fiz didaticamente na faculdade, e nunca profissionalmente, acabei gastanto muito tempo tentando e tive de desistir.

Cheguei também a começar a fazer a parte de autenticação usando JWT para manter o login ativo, junto do bcrype para salvar a senha no DB com hash, mas acabei parando no meio do caminho por questão de tempo.
</br>
------------------ Front-End ------------------
</br>
Front end foi feito em React 17.0 utilizando Material-UI.
Com relação ao front-end, me faltou tempo para conseguir fazer as rotas das maneiras corretas, iria utilizar react-router.
Para Segurar os estados da aplicação do front-end, estava utilizando React-Redux, mas me faltou tempo da mesma maneira.
De qualquer modo, vou seguir construindo a aplicação até que ela esteja pronta.

De qualquer modo, estou enviando junto também um arquivo do postman que já tem as rotas pré configuradas para teste.
Não consegui fazer o tratamento de erro devido para que a aplicação não quebrasse ao inserir uma chama
