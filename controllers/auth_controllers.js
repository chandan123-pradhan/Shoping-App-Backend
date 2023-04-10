const express =require('express');
const router=express.Router();
const {checkRegisterValidation, doLogin}=require('../services/auth_services')
const {register_route, login_route}=require('../routers');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));




router.post(login_route,async(req,res)=>{
  const {email,password}=req.body;
   console.log(email,password);
   const data=await doLogin({email:email,password:password});
   console.log(data);

   
   res.status(200).json(
    data
    );
  
});


router.post(register_route,async(req,res)=>{
  const {name,email,password,mobile_number}=req.body;
   console.log(email,password,name);
  const data= await checkRegisterValidation({
    name:name,
    password:password,
    mobile_number:mobile_number,
    email:email
  });
  
  res.status(200).json({data});
});










module.exports=router