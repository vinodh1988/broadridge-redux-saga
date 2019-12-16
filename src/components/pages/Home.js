import React from 'react';
import {Course} from '../items/CourseX';

const Home=({courses})=>{
    let code=courses.map((x,index)=><Course course={x} key={index}></Course>);
    return(
    <div>
           {code}
    </div>
    );
}

export default Home;