import firebase from 'firebase';

// export default firebaseConfig;
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'clone-b687e.firebaseapp.com',
  databaseURL: 'https://clone-b687e.firebaseio.com',
  projectId: 'clone-b687e',
  storageBucket: 'clone-b687e.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
