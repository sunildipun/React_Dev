import React from "react";
import  ReactDOM from "react-dom/client";

import "./style.scss";

import logo from './assets/logo.png';
import profile from './assets/profile.png';

const logo = (<img className="logo" scr={logo} height={30} width={30}/>)

const Input = () => {
    return (<>
        <input name="search" className="search"/>
    </>)
}

const profile = <img className="profile" scr={profile} height={20} width={20}/>

const Navbar = () => {
    return (
        <nav className="navbar">
            {logo}
            <Input />
            {profile}
        </nav>
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Navbar />)
