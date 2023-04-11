const express =require('express');
const app=express();
const User=require('./config')

async function addUser(user_data){
  await User.add({user_data});
  return user_data;
}

module.exports={
addUser,
}
