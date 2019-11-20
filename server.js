// import express
const express = require('express');
const app = express();

// import firebase configuration credentials hidden from gith
const { firebaseConfig } = require('./config');
//import Firebase from 'firebase'
const firebase = require('firebase');

// Load all files in /public folder
app.use(express.static(`public`));

app.get('/api/send', (req, res) => {
    
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    // firebase collection
    const subs = db.collection('submissions');

    subs.add({test: true})
        .then(ref => {
            res.set("Connection", "close");
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});