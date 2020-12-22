import React from 'react';
import image from './doctor.jpg'
const About=()=>{
    return(
        <div><h1 style={{textAlign:'center'}}>About</h1>
        <img style={{textAlign:'center',width: '100%'}} src={image}/>
        </div>
    );
}
export default About;