import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Session from "../../components/session";

import homeFoto from "../../static/homeq.jpg";

import "./style.css";

function Home(){
    return(
    <>
        <Header/>
        <div className="header-home">
            <div className="title-photo">
                <img src={homeFoto} alt="imagem"/>
            </div>
            <div className="right">
                <h1>Meu Site</h1>
                <div className="container">
                    <div className="container-left">
                        <h2>Quale</h2>
                            <p>     
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. 
                                Ratione, sed deserunt modi nisi dolorum nemo nam neque tempora,
                                voluptatem vel dolor harum. Quas totam voluptatibus quaerat aut enim esse voluptate.
                            </p>
                    </div>
                    <div className="container-right">
                        <h2>Quale</h2>
                            <p>     
                                Lorem ipsum dolor sit amet, 
                                consectetur adipisicing elit. 
                                Ratione, sed deserunt modi nisi dolorum nemo nam neque tempora,
                                voluptatem vel dolor harum. Quas totam voluptatibus quaerat aut enim esse voluptate.
                            </p>
                    </div>
                </div>
            </div>
        </div>
        <Session/>


        <Footer/>
    </>

    );
}


export default Home;