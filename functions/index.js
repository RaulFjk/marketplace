const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc))
})

exports.postCreated = functions.firestore
    .document('posts/{postId}')
    .onCreate(doc => {

        const post = doc.data();
        const notification = {
            content: 'Added a new post',
            user: `${post.firstName} ${post.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

    return createNotification(notification);
})

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
