import React from 'react';
import photo2 from './photo2.svg';
import {Button} from 'react-bootstrap';

const Hero = () => {
  return (
    <div id="hero">
        <div id="text1">
             <p>
              Образовательный центр
              нового поколения
              для всех возрастов  
            </p> 
            <Button variant="primary">Записаться</Button>
        </div>
        <div id="photo2">
            <img id="imgvg" src={photo2} alt=''/>
        </div> 
    </div>
  );
}

export default Hero;
