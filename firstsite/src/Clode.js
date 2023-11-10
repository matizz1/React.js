import React from 'react';
import TTTT2849 from './images/TTTT2849.jpg'
import jopa from './images/jopa.jpg'
import nejopa from './images/nejopa.jpg'

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
              <p>
                Дошкольники и младшая школа
              </p> 
                <img id="imgvg" src={TTTT2849} alt=''/> 
            </div>
            <div id="card2">
                <img id="imgvg" src={jopa} alt=''/>
              <p>
                Средняя школа
              </p>
            </div>
            <div id="card3">
              <img id="imgvg" src={nejopa} alt=''/>
                <p>
                 Старшая школа и взрослые
                </p>
            </div>

          
          
          </div>  
    </div>
  );
}

export default Clode;
