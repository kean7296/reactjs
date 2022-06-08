// import logo from './logo.svg';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

export class App extends Component {

    render() {
        return <Main/>;
    }
}

// const App = React.createElement(
//     'div',
//     {className: 'greeting'},
//     'Hello, React'
// );

// const App = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, React'
//     }
// };

// function App() {
//     return ( 
//         <div>Hello</div>
//     );
// }

export default App;