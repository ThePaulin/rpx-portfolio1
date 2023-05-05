import React from 'react';
import { AppWrap, MotionWrap} from '../../wrapper/index';
import { motion } from 'framer-motion';
import { easeIn, easeInOut, spring } from 'popmotion';

import './Experience.scss';

function Experience() {
  return (
   <motion.div
   whileInView={{y:-10, opacity: [0,1]}}
   transition={{y:{type: "tween", duration:0.2}}}

    className="exp-container app__flex"

   >
   <h1>I experience working with...</h1>
   <div className='app__exp'>
    <div className='app__exp-card app__flex'>
        <h3>Languages</h3>
        <div>
            <h4>HTML</h4>
            <h4>CSS</h4>
            <h4>JavaScript</h4>
            <h4>Python</h4>
            <h4>PHP</h4>
            <h4>...</h4>
        </div>
    </div>
    <div className='app__exp-card app__flex'>
        <h3>Frameworks</h3>
        <div>
            <h4>React</h4>
            <h4>Redux</h4>
            <h4>Gatsby</h4>
            <h4>Express</h4>
            <h4>Next</h4>
            <h4>...</h4>
        </div>
    </div>
    <div className='app__exp-card app__flex'>
        <h3>Tools</h3>
        <div>
            <h4>Node JS</h4>
            <h4>MongoDB</h4>
            <h4>MySQL</h4>
            <h4>GraphQL</h4>
            <h4>Git</h4>
            <h4>...</h4>
        </div>
        
    </div>

    <div className='app__exp-card app__flex'>
        <h3>Methodologies</h3>
        <div>
            <h4>Responsive Web Design</h4>
            <h4>Functional Programing</h4>
            <h4>OOP</h4>
            <h4>Agile Development</h4>
            <h4>SSR and CSR</h4>
            <h4>...</h4>
        </div>
        
    </div>
   </div>
   
   


   
   

   </motion.div>
  )
}

export default AppWrap(
    MotionWrap(Experience, 'app__experience'),
    'experience'
    );