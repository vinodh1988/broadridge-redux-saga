import React,{useState} from 'react';


export const ReviewForm =()=>{
    const {email,setEmail}=useState();
    const {name, setName}=useState();
    const {course,setCourse}=useState();
    const {message,setMessage}=useState();
    return(
       <div>
           <form>
           <table id="tabform">
                <tbody>
                <tr>
                    <td>Email</td>
                    <td><input type="text" value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td><input type="text" value={name} 
                     onChange={(e)=>{setName(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Course</td>
                    <td><input type="text" value={course} 
                     onChange={(e)=>{setCourse(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td>Message</td>
                    <td><input type="text" value={message} 
                     onChange={(e)=>{setMessage(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                <input type="button" value="store" 
                onClick={()=>{this.props.storeReview({name:name,email:email,message:message,
                course:course})}} />
                            
                    </td>
                </tr>
                </tbody>
            </table>
           </form>
       </div>
    )
}