import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/Components/Header";
import Body from "./src/Components/Body";





//config driven UI
const Container = () => {
    return (
        /**
         * <Header />
         * <Body />
         * <Footer />
         */
        <>
        <Header />
        <Body />
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(<Container />)