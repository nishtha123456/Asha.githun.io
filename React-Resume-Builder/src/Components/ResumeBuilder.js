import React from 'react'
import './ResumeBuilder.css'
import {useNavigate} from 'react-router-dom' 

export default function ResumeBuilder()
{
    const Navigate=useNavigate();
    return (
        <>

 <div className="heading1" >
<center><p className="descr1" ><h1 >THE BEST FREE RESUME AND COVER BUILDER ONLINE</h1>  
      <h2 >{" "} {" "}A Quick and Easy Way to Create Your Professional Resume. Choose from 1000+ modern and</h2>
      <h2 >professional templates. All of which can be customized to your liking. Fast and Easy to Use the</h2>        
<h2> resume builder lets you easily and quickly create a resume using our resume wizard.</h2>
</p>  

</center>    
</div>
<div>
    <center><button className="button" onClick={()=>{Navigate('./ResumeTemplates');}}> Try our Resume Builder</button>
    </center>

</div>
<centre>
<div className='abc'>
<p className="para1" >
    Infovirtech Resume Builder
<br/>
Professional Resume & Cover Letter Tools For Any Job</p>




</div>

</centre>

<div className="footer" >
    <p className="para3"><span >© 2022   ALRIGHTS REVERED</span></p>						
</div>

        </>

    );
}