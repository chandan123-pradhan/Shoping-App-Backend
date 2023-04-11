const { addUser } = require('../database/auth_db');
const { validateEmail, validateMobileNumber } = require('../services/validatoin');
// const firebase=require('firebase');
// const db=firebase.firestore();
const {checkEmailExists} = require('./utils')
const firebase=require('firebase');
const db=firebase.firestore();
const User=db.collection('Users')


/**
 * This 
 */
async function user_register({ name, email, mobile_number, password }) {
    if (validateEmail(email)) {
        if (validateMobileNumber(mobile_number)) {

            const isExist = await checkEmailExists(email)

            if (isExist == false) {

                const snapshot = await User.get();
                const user_data=
                    {
                        'user_id': snapshot.size + 1,
                        'name': name,
                        'email': email,
                        'mobile_number': mobile_number,
                        'password': password
                    }
                
               await User.add({user_data})
                

                return message = {
                    status: 200,
                    message: 'User registeration successfully done',
                    data: {
                        name:user_data.name,
                        email:user_data.email,
                        mobile_number:user_data.mobile_number
                    }
                }
            } else {
                console.log("email id already exist");
                return message = {
                    status: 202,
                    message: 'email id already exists',
                    data: {}
                }
            }
        } else {
            console.log("invalid mobile number");
            return message = {
                status: 201,
                message: 'invalid mobile number',
                data: {}
            }

        }
    } else {
        console.log("invalid email");
        return message = {
            status: 201,
            message: 'invalid email address',
            data: {}
        }

    }
}





async function user_login({ email, password }) {
    let user;
    await User.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (email == doc.data().user_data.email && password == doc.data().user_data.password) {

                    user = doc.data().user_data;
                    return user;
                }

            });


        })

        .catch((error) => {
            console.error(error);
        });

    if (user == undefined) {
        return {
            data: {
                status: 401,
                message: 'Username and password not matched',
                data: {}
            }
        };
    }
    else {
        return {
            data: {
                status: 200,
                message: 'User Loggedin successfully Done.',
                data: { 
                    name:user.name,
                        email:user.email,
                        mobile_number:user.mobile_number
                 }
            }
        }
    }


}






module.exports = {
    user_register,
    user_login
}