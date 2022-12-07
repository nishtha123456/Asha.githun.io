import React from 'react'
import { Link } from 'react-router-dom'
//import { Link} from 'react-router-dom'
export default function Navbar() {
  return (
<>
       
<div className='navbar'>
   <ul >
   

      <li float="left"  role="presentation" class="active"><Link to="/Home">Introduction</Link></li>
   
   <li float="left" role="presentation"><Link to="/GetStartResumeBuilder"> Resume</Link></li>
       
   <li float="left" role="presentation"><Link to="/"> Cover Letter</Link></li>  
   <li float="left" role="presentation"><Link to="/"> Login</Link></li>   
 </ul>
 </div>


    
    </>
    
  )
}
