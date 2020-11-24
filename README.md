
# todo 

## Author: Riva Davidowski

### A To Do List Manager which is a web-based task manager application written in React. It also uses Axios for Ajax requests and  was styled with React-Bootstrap.

**Phase1:**

In this first phase, my goal is to setup a foundational system using React hooks that I can build upon in later phases. Initially written with class based components and no proper styles, phase 1 requires a refactor of the application using Hooks and upgrading the style.

**Phase2:**

In Phase 2, I have to connect the To Do Manager to a deployed API backed by a database. The core functionality doesn't change but I have to implement POST, PUT and DELETE methods.
I will also be creating custom Hooks for the Form logic as well as one for making Ajax requests using Axios.

#### Usability: To use the todo app, clone the repo and do an `npm i`. This will install create-react-app and all other dependencies needed for the project to run. Make sure you have Node.js installed and as listed below, to start the app, run `npm start` in the project directory.

#### Dependencies:

- This project was bootstrapped with Create React App. 
- To create a React application, run `npx create-react-app` (name of project here, all lowercase)
- To install it globally, run `npm install -g create-react-app`
- Install react-bootstrap for Form and Listgroup Components: `npm i --save react-bootstrap bootstrap`
- On App.js or Index.js import bootstrap: `import 'bootstrap/dist/css/bootstrap.min.css`;
- Install Axios for Ajax requests: `npm i axios` and then import by using `import axios from 'axios'`

#### UML:


**Getting Started with Create React App**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
