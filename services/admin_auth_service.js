const firebase=require('firebase');
const db=firebase.firestore();
const admin=db.collection('Admin')

async function adminLogin({ email, password }) {
    let user;
    await admin.get()
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
    adminLogin
}