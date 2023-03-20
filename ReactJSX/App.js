import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = (<h1 key='1'>Heading 1</h1>);
const heading2 = <h1 key='2'>Heading 2</h1>;
const heading3 = <h1 key='3'>Heading 3</h1>;

const conatiner = (
    <div>
        {heading1}
        {heading2}
        {heading3}
    </div>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(conatiner);
