# React Quiz
**Madina Sakiyeva**

A ten-question self-study quiz. Select an answer, check the explanation, then continue. The final screen shows the score and offers another attempt.

## Run the project
Install Node.js 22 with npm. Open a terminal in the folder containing package.json.

    npm install
    npm run dev

Open the address printed by Vite. Use npm run build to create a production build. To create a fresh starter from scratch, use npm create vite@latest my-app -- --template react.

## Study notes

### 1. React and SPAs

React is a UI library. In a single-page application, components can show different views within the same document. Here the view depends on the current question and the answers.

### 2. Ecosystem

React DOM renders components into the browser DOM. React Native targets mobile interfaces, and Next.js is a web framework built on React. JavaScript modules, functions and array methods are useful prerequisites.

### 3. Project setup

Node.js runs the development tools, and npm installs packages. Vite serves index.html, which loads src/main.jsx. That module calls createRoot and renders App.

### 4. JSX

JSX extends JavaScript with markup. Braces evaluate an expression. A component returns one root element or fragment. Write className for CSS classes and htmlFor to connect a label to an input.

### 5. Function components

A function component returns JSX. Start its name with a capital letter so React recognizes it. A default export lets another module import the component.

### 6. Props and composition

Props carry data from parent to child. App passes a different question to QuizCard each round. Frame uses the children prop to display either the quiz or its result.

### 7. State

useState remembers a value between renders. Its setter schedules a render. React then applies the required changes to the DOM.

### 8. Lists and conditions

map turns the choices into JSX elements. A unique, stable key identifies each item among its siblings. Conditional rendering lets the quiz reveal the explanation after submission.

### 9. Events and forms

onChange records the choice. onSubmit checks it and prevents a page reload. A separate onClick handler advances to the next question.

### 10. Organization

App manages the round and score, questions.js stores the content, and QuizCard presents one question. One focused component per file makes each part easy to locate.
