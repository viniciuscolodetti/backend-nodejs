# Backend Node.js

## Usuários
Controle completo de usuários com autenticação JWT

### Rotas
1. [POST] '/users' - Cadastro novos usuários;
2. [POST] '/sessions' - Cria uma sessão de autenticação;
3. [PTCH] '/users/avatar' - Atualização do avatar do usuário;
4. [GET]  '/profile' - Exibe perfil do usuário autenticado;
5. [PUT]  '/profile' - Atualiza dados cadastrais e senha do usuário;
6. [POST] '/password/forgot' - Envia e-mail para recuperação de senha;
7. [POST] '/password/reset' - Reseta a senha do usuário.