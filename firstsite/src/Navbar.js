import React from 'react';
import photo from './photo.svg';

const Navbar = () => {
  return (
    <div>
      <div id="wrapper">
        <div id="photo">
          <img src={photo} alt=''/> 
        </div>
      <div id="th1">
        <h1>
          Направления 
        </h1>
        <h1>
          Мероприятия
        </h1>
      </div>
        <div id="alln">
            <div id="kryjki">
            <div id="n1"></div>
            <div id="n2"></div>
            <div id="n3"></div>
        </div>    
          <button id="button1">
            <div id="text">
              +7 (952) 282-12-35
            </div>
          </button>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
