import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// database.ref('notes').push({
//     title: 'todo',
//     body: "this is my body"
// })
// const notes = [{
//     id: '12',
//     body: "this is y note",
//     title:"this is my note"
// }, {
//     id: '123123',
//     body: "this is my second note",
//     title:"this is my asdnote"
// }]

// database.ref('notes').set(notes);

// database.ref().set({
//     name: "Tanish",
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Delhi',
//         country: "India"
//     }
// });

// database.ref('location/city').set('New Delhi');

// database.ref('attributrs').set({
//     height: 'hello',
//     width: '12'
// });