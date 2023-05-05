import React from 'react';

import { BsLinkedin, BsGithub, BsStackOverflow} from 'react-icons/bs';

const SocialMedia = ()=> {

    return(
        <div className='app__social'>
        <div >
            <button className='hiddenBtn' >
                <a style={{fontSize:"2rem", color: "rgba(228, 127, 127, 0)"}} href='https://www.linkedin.com/in/paulin-kubwira-249489228/' target={"_blank"}>M</a>
            </button>
            <BsLinkedin />
            
        </div>
        <div>
            <button className='hiddenBtn'>
                <a style={{fontSize:"2rem", color: "rgba(228, 127, 127, 0)" }} href='https://github.com/ThePaulin' target={"_blank"}>M</a>
            </button>
            <BsGithub />
        </div>
        <div>
            <button  className='hiddenBtn'>
                <a style={{fontSize:"2rem", color: "rgba(228, 127, 127, 0)" }} href='https://stackoverflow.com/users/17956766/thepaulin' target={"_blank"}>M</a>
            </button>
            <BsStackOverflow />
        </div>
    </div>
    )
}

export default SocialMedia;