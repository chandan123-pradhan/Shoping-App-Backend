const firebase=require('firebase');
const db=firebase.firestore();
const User=db.collection('Users')

async function checkEmailExists(email) {
    let isExist = false;
    await console.log(User.get());
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


module.exports={
    checkEmailExists,
    User
}