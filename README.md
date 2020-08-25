# Backend Node.js

## Usuários
API para gerenciamento completo de usuários com autenticação JWT

### Rotas
1. [*POST*] `'/users'` - Cadastro de novos usuários;
2. [*POST*] `'/sessions'` - Cria uma sessão de autenticação;
3. [*PTCH*] `'/users/avatar'` - Atualização do avatar do usuário;
4. [*GET*]  `'/profile'` - Exibe perfil do usuário autenticado;
5. [*PUT*]  `'/profile'` - Atualiza dados cadastrais e senha do usuário;
6. [*POST*] `'/password/forgot'` - Envia e-mail para recuperação de senha;
7. [*POST*] `'/password/reset'` - Reseta a senha do usuário.

## Categorias
Módulo para gerenciamento das categorias de serviços da aplicação

### Rotas
1. [*POST*] `'/categories'` - Cadastro de novos usuários;
2. [*GET*]  `'/categories'` - Lista todas as categorias cadastradas.
