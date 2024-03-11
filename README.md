# teste-enterness

Teste técnico enterness

# Conteúdos

1. [Requisitos](#Requisitos)<br>
2. [Execução do backend](#Execução-do-backend)<br>
   2.1 [Instalando dependências](##Instalando-dependências)<br>
   2.2 [Configurando ambiente local](##Configurando-ambiente-local)<br>
   2.3 [Executando projeto](##Executando-projeto)<br>
3. [Execução do frontend](#Execução-do-frontend)<br>
   3.1 [Instalando dependências](##Instalando-dependências)<br>
   3.2 [Configurando ambiente local](##Configurando-ambiente-local)<br>
   3.3 [Executando projeto](##Executando-projeto)<br>
4. [Execução Socket.io](#Execução-Socket.io)<br>
   4.1 [Instalando dependências](##Instalando-dependências)<br>
   4.2 [Executando servidor](##Executando-servidor)<br>

# 1 Requisitos

- NodeJS v18.17.1
- npm v9.6.7
- MariaDB 10.5.23 para execução do backend(possivelmente funciona com outras versões do Mysql)

# 2 Execução do backend

## 2.1 Instalando dependências

Executar o comando no diretório do back-end:

```console
npm i
```

## 2.2 Configurando ambiente local

Existe um arquivo **.env.example**, copiar este arquivo para um **.env** e substituir pelas variáveis do banco de dados local:

```console
cp .env.example .env
```

## 2.3 Executando projeto

Para iniciar a execução do backend, basta executar o seguinte comando:

```console
npm run start
```

# 3 Execução do frontend

## 3.1 Instalando dependências

Executar o comando no diretório do front-end:

```console
npm i
```

## 3.2 Configurando ambiente local

Assim como anteriormente, existe um arquivo **.env.example**, copiar este arquivo para um **.env** e substituir pelas url da API local(gerada pelo backend, por padrão será 127.0.0.1:8000) e url do servidor do Socket.io(por padrão será 127.0.0.1:3001):

```console
cp .env.example .env
```

## 3.3 Executando projeto

Para executar projeto no ambiente local, podemos executar o seguinte comando agora:

```console
npm run dev
```

Agora basta acessarmos a seguinte rota(se for a padrão) em um navegador de sua escolha:

`127.0.0.1:3000`

# 4 Execução Socket.io

## 4.1 Instalando dependências

Executar o comando no diretório do socket-io.server:

```console
npm i
```

## 4.2 Executando servidor

Executar seguinte comando:

```console
node server.js
```
