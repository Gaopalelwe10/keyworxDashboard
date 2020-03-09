import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.addAgent = functions.https.onCall((data, context)=>{
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            agent: true
        })
    }).then(()=>{
        return {
            message: `Success! ${data.email} has been made a Agent`
        }
    }).catch(err =>{
        return err;
    });
});


exports.addClient = functions.https.onCall((data, context)=>{
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            client: true
        })
    }).then(()=>{
        return {
            message: `Success! ${data.email} has been made a client`
        }
    }).catch(err =>{
        return err;
    });
});

exports.addAdmin = functions.https.onCall((data, context)=>{
    return admin.auth().getUserByEmail(data.email).then(user =>{
        return admin.auth().setCustomUserClaims(user.uid,{
            admin: true
        })
    }).then(()=>{
        return {
            message: `Success! ${data.email} has been made an Admin`
        }
    }).catch(err =>{
        return err;
    });
});