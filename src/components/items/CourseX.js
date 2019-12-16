import React from 'react';
import {Link} from 'react-router-dom';

export const Course=({course})=>{

    let url="https://vinodh-images.s3.ap-south-1.amazonaws.com/projectimages/"+course.filename;
    let url2="/coursedetails/"+course.modulecode;
    return(
<Link to={url2}>
     <div className="card" style={{width:"350px",float:"left",margin: "10px"}}>
        <img className="card-img-top" src={url} alt="Card image" style={{width:"100%"}}/>
        <div className="card-body">
    <h4 className="card-title">{course.modulename}</h4>
    <p className="card-text">{course.description}</p>
    <h5>Price:: Rs. {course.price}</h5>
    <h6>Duration:: {course.duration} hours</h6>
        </div>
      </div>
 </Link> 
    );

}