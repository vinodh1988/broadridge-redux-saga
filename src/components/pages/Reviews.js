import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import  {ReviewForm} from '../items/ReviewForm';

const Reviews=()=>{
 
    return(
    <Router>
        <div>
    <Link to="/reviews/post">Post Review</Link>
       </div>
       <div id="reviews">
      
          <Route path="/reviews/post" component={ReviewForm} />
          <h1>Reviews List</h1>
       </div>
    </Router>
    );
    
}

export default Reviews;