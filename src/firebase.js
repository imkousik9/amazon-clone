import firebase from 'firebase';

// export default firebaseConfig;
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyClNavuXHim-bLqXnEv_YDa3ZBdKciRGBk',
  authDomain: 'clone-b687e.firebaseapp.com',
  databaseURL: 'https://clone-b687e.firebaseio.com',
  projectId: 'clone-b687e',
  storageBucket: 'clone-b687e.appspot.com',
  messagingSenderId: '543073718291',
  appId: '1:543073718291:web:593257e13c71cefb892fe6',
  measurementId: 'G-16C3N22HEH'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
