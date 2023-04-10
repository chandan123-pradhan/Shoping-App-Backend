const { addUser } = require('../database/auth_db');
const { validateEmail, validateMobileNumber } = require('../services/validatoin');
const User = require('../database/config');



async function checkRegisterValidation({ name, email, mobile_number, password }) {
    if (validateEmail(email)) {
        if (validateMobileNumber(mobile_number)) {

            const isExist = await checkEmailExists(email)

            if (isExist == false) {

                const snapshot = await User.get();
                const userData = await addUser(
                    {
                        'user_id': snapshot.size + 1,
                        'name': name,
                        'email': email,
                        'mobile_number': mobile_number,
                        'password': password
                    }
                );

                return message = {
                    status: 200,
                    message: 'User registeration successfully done',
                    data: {
                        userData
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




async function checkEmailExists(email) {
    let isExist = false;
    await User.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (email == doc.data().user_data.email) {
                    isExist = true;
                    return isExist;
                }

            });
            console.log(isExist);

        })

        .catch((error) => {
            console.error(error);
        });
    return isExist;
}


async function doLogin({ email, password }) {
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
                data: { user }
            }
        }
    }


}


module.exports = {
    checkRegisterValidation,
    checkEmailExists,
    doLogin
}