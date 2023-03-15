console.log('Hello World');
console.log('React', React);
const header1 = React.createElement('h1', {id: 'header'}, 'Header 1');
const header2 = React.createElement('h2', {id: 'header'}, 'Header 2');
console.log(header1, header2);

const container = React.createElement('div', {}, [header1, header2]);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);

root.render(container);


