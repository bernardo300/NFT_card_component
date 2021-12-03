import React, { useState } from 'react';
import './style.css';
import img_main from 'src/img/image-equilibrium.jpg';
import img_hover from 'src/img/image-equilibrium.png';

import ethereum from 'src/img/icon-ethereum.svg';
import clock from 'src/img/icon-clock.svg';

const Card = (props)=>{
  const [imagem, setImagem] = useState(img_main)

  const {title,frase, author, avatar} = props;
  function changeImage(){
    if(imagem === img_main){
      setImagem(img_hover)
    }
    else{
      setImagem(img_main)
    }
  }
  return (
      <div className="card">
        <img className="imagem" src={imagem} alt={title} onMouseOver={changeImage} onMouseOut={changeImage}/>  

        <h1 className="title">{title}</h1>

        <p className="color_frase">{frase}</p>
       
        <div className="info">
          <div className="item">
            <img src={ethereum}/>
            <p className="color_cyan">{'0.041 ETH'}</p>
          </div>

          <div className="item">
            <img src={clock}/>
            <p>{'3 days left'}</p>
          </div>
        </div>

        <div className="barra"></div>

        <div className="perfil">
          <img src={avatar} alt="Meu Avatar"/>
          <p>  Creation of <a href="https://github.com/bernardo300" 
          target="_blank" 
          rel="noreferrer" 
          className="color_white">{author}</a></p>
        </div>
      </div>
    )
}
export default Card;