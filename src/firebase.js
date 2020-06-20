import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzxbCxVW1wQm2bZHDgD4xqkvrpUYaKQ2M",
    authDomain: "dropin-24766.firebaseapp.com",
    databaseURL: "https://dropin-24766.firebaseio.com",
    projectId: "dropin-24766",
    storageBucket: "dropin-24766.appspot.com",
    messagingSenderId: "332525050157",
    appId: "1:332525050157:web:0a86463e8cca99f9bedba4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;