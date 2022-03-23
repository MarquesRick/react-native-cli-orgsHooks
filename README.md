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

accessibilityLabel = para pessoas com deficiencia visual melhorar sua interação com o app

Hooks Básicos:

useState: usado para gerenciar estados;
useEffect: usado para gerar efeitos colaterais a certas atualizações;
useContext: usado para gerenciar contextos entre componentes distintos.
Hooks Adicionais:

useReducer: uma alternativa ao useState quando há lógicas complexas;
useCallback: memoriza uma função, que só é atualizada quando os valores recebidos como argumento são atualizados;
useMemo: semelhante ao useCallback, mas ao invés de função, armazena um valor;
useRef: usado normalmente para acessar propriedades de componentes “filhos”;
useImperativeHandle: usado para personalizar o valor da instância que será acessível aos componentes “pais”;
useLayoutEffect: semelhante ao useEffect, porém é disparado na mesma fase que componentDidMount e componentDidUpdate. É preferível o uso do useEffect;
useDebugValue: usado para definir um "label" em hooks customizados que irá aparecer somente em ferramentas de debug.