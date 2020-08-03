import React from 'react';

import Logo from "../../static/logo.png";
import imgHeader from "../../static/teste.jpg";
import "./style.css"

function Header (){
    return(
        <>
        <div className="Header">
            <div className="logo">
             <img src={Logo} alt=""/>
            </div>
            <div className="divNav">
                <nav>
                    <ul className="navLinks">
                        <li><a href="https://google.com">Home</a></li>
                        <li><a href="https://google.com">Sobre</a></li>
                        <li><a href="https://google.com">Contato</a></li>
                        <li><a href="https://google.com">Login</a></li>
                    </ul>
                </nav>
                <a href="https://google.com" className="assine">Assine</a>
            </div>
        </div>
          <div className="imgHeader">
            <img src={imgHeader} alt="imagem de cabeçalho"/>
        </div>
      </>
    );
}
export default Header;