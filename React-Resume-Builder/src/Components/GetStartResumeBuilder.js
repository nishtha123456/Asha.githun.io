import react from 'react'
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';

export default function GetStartResumeBuilder (){
  const Navigate=useNavigate()
    return(

        <>
                   <Stack spacing={2} direction="row" style={{'margin-top':'10vh'}}>
                     
                    <div className='info'> 
                    
                        <h1 className=" para2" >Do you want an outsanding, yet simple and
                          professional templates for your resume/cv
                          and a matching cover letter? 
                        </h1>
                        <h2 className='para2'>                          We got you! In minutes, you can create a professionallooking resume / CV and make a compelling cover letter to
                         accompany your resume.
                        </h2>

                        <h2 className='para2' >
                          To keep your application extra memorable and leave a greater
                          impression on employers, pair each resume template with a
                          corresponding cover letter template.
                        </h2>
                     
                        <button className='button' style={{'margin-left':'80px'}} onClick={()=>{Navigate('./ResumeTamplates')}}>Get started</button>
                         
                        </div>
                        <div className='img-info'>  
                        <img  className='img-info' src='https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@1x.png'/>

                          
                        </div>
                
                   
                        </Stack>

        </>
    )
}