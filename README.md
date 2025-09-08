# Checkpoint FIAP: Demon Slayer App

Este é um aplicativo mobile desenvolvido como parte de um checkpoint da FIAP. O objetivo é criar um catálogo de personagens do anime/mangá *Demon Slayer (Kimetsu no Yaiba)*, consumindo uma API pública para exibir informações detalhadas sobre cada personagem.

O aplicativo foi construído utilizando React Native com o framework Expo e TypeScript, focando em uma navegação simples e uma interface visualmente agradável que se adapta ao personagem selecionado.

## 📱 Telas

O aplicativo é composto por duas telas principais:

1.  **Tela de Listagem:** Exibe todos os personagens obtidos da API em uma lista rolável. Cada item da lista mostra a imagem e o nome do personagem.
2.  **Tela de Detalhes:** Ao selecionar um personagem, o usuário é levado a esta tela, que exibe informações mais detalhadas como nome, imagem, e outros atributos. O fundo da tela muda dinamicamente dependendo da raça do personagem (Humano ou Demônio).

## ✨ Funcionalidades Principais

-   Listagem de 45 personagens de *Demon Slayer*.
-   Navegação da tela de lista para a de detalhes.
-   Passagem de dados de personagens entre as telas para otimizar o desempenho e evitar chamadas de API desnecessárias.
-   Fundo dinâmico na tela de detalhes que muda de acordo com a raça do personagem.
-   Interface de usuário limpa e inspirada no design proposto.

## 🛠️ Tecnologias Utilizadas

-   **React Native:** Framework para desenvolvimento de aplicativos móveis multiplataforma.
-   **Expo:** Plataforma e conjunto de ferramentas para facilitar o desenvolvimento e a execução de apps React Native.
-   **Expo Router:** Sistema de navegação baseado em arquivos para criar rotas de forma declarativa.
-   **TypeScript:** Superset do JavaScript que adiciona tipagem estática ao código, aumentando a robustez e a manutenibilidade.

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter o seguinte software instalado em sua máquina:

-   [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
-   NPM ou Yarn
-   Opcional: Git para clonar o repositório.

Para visualizar o aplicativo, você precisará de:

-   O app **Expo Go** instalado em um celular físico (Android ou iOS).
-   *OU* um emulador Android configurado via Android Studio.
-   *OU* um simulador iOS configurado via Xcode (apenas em macOS).

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

**1. Clone o Repositório**
```bash
git clone (https://github.com/30Lima/PersonAPP.git)
cd DemonSlayerApp
```

**2. Instale as Dependências**
Execute o comando abaixo para instalar todos os pacotes necessários definidos no package.json.
```bash
npm install
```

**4. Inicie o Servidor de Desenvolvimento**
Este comando inicia o servidor do Expo, que permite que você rode o aplicativo.
```bash
npx expo start
```

**5. Abra o Aplicativo**
Após o passo anterior, um QR Code aparecerá no terminal.

No celular: Abra o app Expo Go e escaneie o QR Code.
No emulador: Pressione a (para Android) ou i (para iOS) no terminal.

## 🌐 API
Este projeto utiliza a Demon Slayer API para obter os dados dos personagens. Agradecimentos aos criadores da API por disponibilizarem os dados publicamente.

## 👨‍💻 Desenvolvedor
Desenvolvido por Pedro Lima.
