import React from 'react';

export const CourseContent =(props)=>{
    const {cid} = props.match.params;
    return(
        <div>
            <h1>Course content would appear Here</h1>
               <h3>The course id is {cid}</h3>
        </div>
    );

}