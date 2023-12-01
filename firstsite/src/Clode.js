import React from 'react';
import TTTT2849 from './images/TTTT2849.jpg';
import jopa from './images/jopa.jpg';
import nejopa from './images/nejopa.jpg';
import {Button} from 'react-bootstrap';
import { motion } from 'framer-motion';

const Clode = () => {
  const [hoverState, sethover] = React.useState(false);
  const [hoverState1, sethover1] = React.useState(false);
  const [hoverState2, sethover2] = React.useState(false);

  return (
    <div id="clode">
        <div id="clode1">
            <p>
                Образовательные траектории
            </p>
        </div>  
          <div id="cards">   
            <motion.div id="card1"
            onHoverStart = {()=>{
              sethover(hoverState => true);
            }}
            onHoverEnd={()=>{
              sethover(hoverState => false);
            }}
            >
              <div id="qwcard1">
                <motion.p
                animate = {{y:hoverState ? 0:40}}
                transition = {{duration:0.2}}
                >
                  Дошкольники и <br/> младшая школа
                </motion.p>  
                <motion.div
                animate = {{y:hoverState ? 0:-40, opacity: hoverState ? 1:0}}
                transition = {{duration:0.2}}
                >              
                  <Button variant="success">подробнее</Button>
                </motion.div>
              </div>
                <img id="imgvg1" src={TTTT2849} alt=''/> 
            </motion.div>
            <motion.div id="card2"
             onHoverStart = {()=>{
              sethover1(hoverState1 => true);
            }}
            onHoverEnd={()=>{
              sethover1(hoverState1 => false);
            }}
            >
              <div id="qwcard2">
                <motion.p
                animate = {{y:hoverState1 ? 0:40}}
                transition = {{duration:0.2}}
                >
                 Средняя школа
                </motion.p>
                <motion.div
                 animate = {{y:hoverState1 ? 0:-40, opacity: hoverState1 ? 1:0}}
                 transition = {{duration:0.2}}
                >
                  <Button variant="success">подробнее</Button>
                </motion.div>
              </div>
                <img id="imgvg1" src={jopa} alt=''/> 
            </motion.div>
            <motion.div id="card3"
            onHoverStart = {()=>{
              sethover2(hoverState2 => true);
            }}
            onHoverEnd={()=>{
              sethover2(hoverState2 => false);
            }}
            >
              <div id="qwcard3">
                  <motion.p
                  animate = {{y:hoverState2 ? 0:40}}
                  transition = {{duration:0.2}}
                  >
                   Старшая школа <br/> и взрослые
                  </motion.p>
                  <motion.div
                  animate = {{y:hoverState2 ? 0:-40, opacity: hoverState2 ? 1:0}}
                  transition = {{duration:0.2}}
                  >
                    <Button variant="success">подробнее</Button>
                  </motion.div>
              </div>
                <img id="imgvg1" src={nejopa} alt=''/>
            </motion.div>

          
          
          </div>  
    </div>
  );
}

export default Clode;
