import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCSvANE3rF5aTZyCKx8tO5KmXWlvw7Yu1A",
  authDomain: "playpal-e0f89.firebaseapp.com",
  projectId: "playpal-e0f89",
  storageBucket: "playpal-e0f89.appspot.com",
  messagingSenderId: "948482127615",
  appId: "1:948482127615:web:02a53a81b4d7f96e8afeca"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
