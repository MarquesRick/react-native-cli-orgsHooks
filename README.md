<a href="https://www.linkedin.com/in/henri-marques/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/37425086?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Henrique Marques</b></sub></a> <a href="https://www.linkedin.com/in/henri-marques/" title="Linkedin">🧑🏻‍💻
 </a>


Made with ❤️ by Henrique Marques 👋🏽 Say hello!

[![Twitter Badge](https://img.shields.io/badge/-@Henrimarques18-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/Henrimarques18)](https://twitter.com/Henrimarques18) [![Linkedin Badge](https://img.shields.io/badge/-Henrique_Marques-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henri-marques/)](https://www.linkedin.com/in/henri-marques/) 
[![Gmail Badge](https://img.shields.io/badge/-henmarques-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:henmarques2009@gmail.com)](mailto:henmarques2009@gmail.com)

---
<h1 align="center">OrgsHook</h1>

<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 React Native CLI</a>
</h1>
<p align="center">🚀 simple application developed with React Native CLI</p>

###  🏗  Running/Creating the project
```bash
# Create
$ npx react-native init orgsHook

# Run on android
$ npx react-native run-android

# Run on IOS
$ npx react-native run-ios

# Run Metro
$ npm start

# Install Navigations - version 6.x
$ npm install @react-navigation/native@^6.x

# Install dependencies for Navigations
$ npm install react-native-screens react-native-safe-area-context

# For IOS, install this another dependencie
$ npx pod-install ios

# Install tab navigation
$ npm install @react-navigation/bottom-tabs
``` 
Navigation For Android, execute according to the steps informed in the article:
<a href="https://reactnavigation.org/docs/getting-started/#:~:text=react%2Dnative%2Dscreens%20package%20requires%20one%20additional%20configuration%20step%20to%20properly%20work%20on%20Android%20devices.%20Edit%20MainActivity.java%20file%20which%20is%20located%20in%20android/app/src/main/java/%3Cyour%20package%20name%3E/MainActivity.java" target="_blank">Docs</a>
###  ⚠️  Important

Remember: if you download a project from scratch, run ```npm install``` commands to download node dependencies and, if running for iOS, ```cd ios && pod install``` to download native iOS dependencies.

### 💿 Technologies

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/)

### ℹ️  Info
<b>componentDidMount:</b> which, as we have seen, is executed when the component finishes rendering;

<b>componentDidUpdate:</b> which is executed when the component receives an update and is not executed the first time the component loads;

<b>componentWillUnmount:</b> which is executed when the component is removed from the screen;

<b>componentDidCatch:</b> which is called when the application encounters an error during rendering, in some lifecycle method or in the constructor of child components.

<b>accessibilityLabel</b> = for visually impaired people to improve their interaction with the app

---

### Basic Hooks:

<b>useState:</b> used to manage states;

<b>useEffect:</b> used to generate side effects to certain updates;

<b>useContext:</b> used to manage contexts between different components.

---

### Additional Hooks:

<b>useReducer:</b> an alternative to useState when there are complex logics;

<b>useCallback:</b> memorizes a function, which is only updated when the values received as an argument are updated;

<b>useMemo:</b> similar to useCallback, but instead of a function, it stores a value;

<b>useRef:</b> normally used to access properties of “child” components;

<b>useImperativeHandle:</b> used to customize the instance value that will be accessible to the “parent” components;

<b>useLayoutEffect:</b> similar to useEffect, but fired in the same phase as componentDidMount and componentDidUpdate. UseEffect is preferred;

<b>useDebugValue:</b> used to set a "label" in custom hooks that will only appear in debug tools.

