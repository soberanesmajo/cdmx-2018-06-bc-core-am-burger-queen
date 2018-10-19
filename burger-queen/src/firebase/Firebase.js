import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAPTOHrZlBeSv2hfP2Kk3eFezRXTshQ74Y",
  authDomain: "burger-queen-72c04.firebaseapp.com",
  databaseURL: "https://burger-queen-72c04.firebaseio.com",
  projectId: "burger-queen-72c04",
  storageBucket: "burger-queen-72c04.appspot.com",
  messagingSenderId: "169607877333"
  };

firebase.initializeApp(config);

export default firebase;

