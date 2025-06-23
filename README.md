# 🚗 Sistema de Estacionamento - React Native

Este aplicativo foi desenvolvido em **React Native com TypeScript** com o objetivo de simular o controle de um estacionamento, permitindo registrar entradas, saídas e consultar relatórios de uso.

## 📱 Funcionalidades

- ✅ Visualizar vagas disponíveis e ocupadas com **indicação por cor**
- ✅ Adicionar veículo a uma vaga
- ✅ Remover veículo da vaga
- ✅ Buscar veículo por placa
- ✅ Gerar relatório com:
  - Quantos veículos entraram
  - Quantos veículos saíram
  - Média de tempo estacionado

💡 Melhorias Futuras
- Armanezamento das iformações
- Notificações para tempo excedido
- Opção para selecionar número de vagas

## 🧠 Tecnologias e Conceitos Aplicados

- ⚛️ **Componentes funcionais** com Hooks (`useState`, `useContext`, `useMemo`)
- 🌐 **React Navigation** para navegação entre telas
- 🎯 **Context API** para gerenciamento global de estado
- 🎨 Interface **responsiva e amigável**
- 🧱 Código organizado e componentizado
- 📊 Relatório dinâmico com cálculo de média de tempo – **aspecto diferencial**

## 🗂 Estrutura de Pastas
📁 src
├── components/ # Componentes visuais reutilizáveis
├── context/ # Context API global
├── screens/ # Telas do aplicativo
├── utils/ # Funções utilitárias

## ▶️ Como rodar o projeto

1. Clone o repositório

git clone https://github.com/seu-usuario/estacionamento-app.git
cd estacionamento-app

2. Instale as dependências

npm install
# ou
yarn

3. Execute o projeto

npx react-native run-android
# ou
npx expo start

✅ Requisitos
Node.js

React Native CLI ou Expo

Emulador Android ou dispositivo físico
