import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCEzlMn9XrwSeNkHmnGxGfYzL6GEJt9EUo",
    authDomain: "e-ride-d3e4c.firebaseapp.com",
    projectId: "e-ride-d3e4c",
    storageBucket: "e-ride-d3e4c.appspot.com",
    messagingSenderId: "992958321645",
    appId: "1:992958321645:web:8b2c19a3ba831637dd8de4"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


