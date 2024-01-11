# IBTEC 🧩

Passo a passo de como deve ser feito as alterações no site


## Passo 1

1. Você deve ter o node instalado [Node LTS](https://nodejs.org/en)

2. Você deve abrir a pasta do projeto com VSCode

3. Depois de aberto, abra o terminal e rode o comando "npm install" sem as aspas

4. Aguarde instalar todas as dependências do projeto

5. Para abrir o projeto utilize o "npm run dev" sem as aspas

6. O projeto abrirá na url http://localhost:5173/


## Passo 2


1. Após ter feito as alterações no projeto, rode o comando no terminal "npm run build" sem as aspas

2. Vai ser criado a pasta "dist" na raiz do projeto

3. Transforme os arquivos que estão dentro em zip (Obs: não a pasta, os arquivos apenas)

## Passo 3

1. Extraia os arquivos do zip na pasta "dev.ibtec.org.br" (Será aonde o dominio vai ler os arquivos)

2. ## IMPORTARTE ## Em nenhum caso você deve excluir as pastas "dev" / "nodejsapp" / ".well-know" E o arquivo .htaccess (Caso excluidos, a aplicação não funcionará)

3. Com isso a aplicação já estará rodando atualizada. (OBS: Mantenha ambos os arquivos atualizados tanto o "build" que você gerou, quanto os arquivos de "desenvolvimento")
