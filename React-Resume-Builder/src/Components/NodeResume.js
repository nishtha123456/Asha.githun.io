 const express = require('express');
// const request=require('request');

 const app = express()

 const port = 5000
 cors = require("cors");

 app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.post('/',async(req,res)=>{
  const fname=req.body.firstname;
  console.log(req.body)
  console.log(req.body.firstname)
  
  // console.log({lastname})
 // customers.push(req.body)
  // console.log({customers})
 //module.exports=fname;
  })
 
 
 app.get('/', async(req, res) => {
  const customers=[
{ firstname:"asha",  lastname:"savani"},
    { firstname:"nishtha",  lastname:"savani"},
    { firstname:"yaksh",  lastname:"savani"}
 
   ]
 res.json({customers})  ;
 })
 //module.exports={firstname1,lastname1};
 //app.post('/',async(req,res)=>{
 //let {name}=req.body
  //console.log(req.body)
  //customers=customers.push(req.body)
  


 //})

 // var id=2;
   //  res.send({id})
   