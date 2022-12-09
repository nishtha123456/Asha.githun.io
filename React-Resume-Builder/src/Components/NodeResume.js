 const express = require('express');
 const app = express()

 const port = 5000
 const cors = require("cors");
let firstname='';
 let customers=[]  ;

 app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())
 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.post('/',async(req,res)=>{
   firstname=req.body.firstname
  console.log(req.body)
 //customers.push(user);
  
  console.log(firstname)
  
  
 
  })
 
 
 app.get('/', async(req, res) => {
  //res.json({customers})  ;
  res.json({firstname});
 })

 //module.exports={firstname1,lastname1};
 //app.post('/',async(req,res)=>{
 //let {name}=req.body
  //console.log(req.body)
  //customers=customers.push(req.body)
  


 //})

 // var id=2;
   //  res.send({id})
   