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
                  Дошкольники и младшая школа
                </p> 
                  <Button variant="success">Success</Button>{' '}
              </div>
                <img id="imgvg" src={TTTT2849} alt=''/> 
            </div>
            <div id="card2">
              <div id="qwcard2">
                <p>
                 Средняя школа
                </p>
                  <Button variant="success">Success</Button>{' '}
              </div>
                <img id="imgvg" src={jopa} alt=''/> 
            </div>
            <div id="card3">
              <div id="qwcard3">
                  <p>
                   Старшая школа и взрослые
                  </p>
                    <Button variant="success">Success</Button>{' '}
              </div>
                <img id="imgvg" src={nejopa} alt=''/>
            </div>

          
          
          </div>  
    </div>
  );
}

export default Clode;
