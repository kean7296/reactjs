import React, { Component } from 'react'

// const App = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, React'
//     }
// };

const App = React.createElement(
    'div',
    {className: 'greeting'},
    'Hello, React'
);

export default App;