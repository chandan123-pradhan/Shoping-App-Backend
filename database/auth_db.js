const express =require('express');
const User=require('./config')
const app=express();


async function addUser(user_data){
  await User.add({user_data});
  return user_data;
}

module.exports={
addUser
}
