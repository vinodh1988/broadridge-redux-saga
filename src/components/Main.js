import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
//import  Home from './pages/Home';
import {HomeConnected} from '../connectedComponents/ConnectedCourses';
import  Reviews from './pages/Reviews';
import  Contacts from './pages/Contacts';
import  Online from './pages/Online';
import  Courses from './pages/Courses';
import {CourseContent} from './items/CourseContent';
import '../css/main.css';

const Main= ()=>{

    return(
<Router>
<div id="home">
 <nav className="navbar navbar-expand-sm bg-back navbar-dark fixed-top">
  <a className="navbar-brand" href="#">XYZCourses</a>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/"> Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/courses"> Courses</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/reviews"> Reviews</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/online"> Online Classes</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contacts"> Contact us</Link>
    </li>
  </ul>
</nav>


         <div id="container">
             <div id="content">
          <Route exact path="/" component={HomeConnected} />
          <Route path="/courses" component={Courses} />
          <Route exact path="/reviews" component={Reviews} />
          <Route path="/contacts" component={Contacts}/>
          <Route path="/coursedetails/:cid" component={CourseContent}/>
    
            </div>
            <div id="sidebar">

            </div>
         </div>
    
     </div>
     </Router>

    );

}

export default Main;