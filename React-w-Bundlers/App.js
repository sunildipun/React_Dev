console.log('Hello React');
import React from "react";
import ReactDOM from "react-dom/client";
console.log(React, ReactDOM);

const header = React.createElement('h1', {id: 'title'}, 'Header 1');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header);