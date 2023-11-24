import React from 'react';
import TTTT2849 from './images/TTTT2849.jpg'
import jopa from './images/jopa.jpg'
import nejopa from './images/nejopa.jpg'
import {Button} from 'react-bootstrap';

const Clode = () => {
  return (
    <div id="clode">
        <div id="clode1">
            <p>
                Образовательные траектории
            </p>
        </div>  
          <div id="cards">   
            <div id="card1">
              <div id="qwcard1">
                <p>
                  Дошкольники и <br/> младшая школа
                </p> 
                  <Button variant="success">подробнее</Button>{' '}
              </div>
                <img id="imgvg1" src={TTTT2849} alt=''/> 
            </div>
            <div id="card2">
              <div id="qwcard2">
                <p>
                 Средняя школа
                </p>
                  <Button variant="success">подробнее</Button>{' '}
              </div>
                <img id="imgvg1" src={jopa} alt=''/> 
            </div>
            <div id="card3">
              <div id="qwcard3">
                  <p>
                   Старшая школа <br/> и взрослые
                  </p>
                    <Button variant="success">подробнее</Button>{' '}
              </div>
                <img id="imgvg1" src={nejopa} alt=''/>
            </div>

          
          
          </div>  
    </div>
  );
}

export default Clode;
