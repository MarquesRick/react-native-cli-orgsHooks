criar projeto: npx react-native init orgsHook
rodar no android: npx react-native run-android
rodar no ios: npx react-native run-ios
rodar o metro: npm start

Lembre-se: caso baixe um projeto do zero, rode os comandos npm install para baixar as dependências do node e, caso for rodar para iOS, cd ios && pod install para baixar as dependências nativas de iOS.

componentDidMount: que, como vimos, é executado quando o componente termina de renderizar;
componentDidUpdate: que é executado quando o componente recebe alguma atualização e não é executado na primeira vez que o componente carrega;
componentWillUnmount: que é executado quando o componente é removido da tela;
componentDidCatch: que é chamado quando a aplicação encontra algum erro durante a renderização, em algum método do ciclo de vida ou no construtor de componentes filhos.

Documentação Hooks: https://pt-br.reactjs.org/docs/hooks-intro.html