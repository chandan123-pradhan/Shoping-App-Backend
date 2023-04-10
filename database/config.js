

// // // const firebase =require('fi
// // const admin = require("firebase-admin");
// // const db = admin.firestore();

// const firebase = require('firebase/app');
// require('firebase/firestore'); 
// require('firebase/auth');
// require('firebase/database');
// const firebaseConfig = {
    // apiKey: "AIzaSyBeylkYB2eahuObrLldb10W4CuRO7slTdQ",
    // authDomain: "nodeproject-f60cb.firebaseapp.com",
    // projectId: "nodeproject-f60cb",
    // storageBucket: "nodeproject-f60cb.appspot.com",
    // messagingSenderId: "818843561199",
    // appId: "1:818843561199:web:50f3eca5103ea98616ff1a",
    // measurementId: "G-Z48MWK3ZCX"
//   }; 
  
  
// firebase.initializeApp(firebaseConfig)
// const db=firebase.firestore()
// const User=db.collection("Users")

// module.exports=User

const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBeylkYB2eahuObrLldb10W4CuRO7slTdQ",
  authDomain: "nodeproject-f60cb.firebaseapp.com",
  projectId: "nodeproject-f60cb",
  storageBucket: "nodeproject-f60cb.appspot.com",
  messagingSenderId: "818843561199",
  appId: "1:818843561199:web:50f3eca5103ea98616ff1a",
  measurementId: "G-Z48MWK3ZCX"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;