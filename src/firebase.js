import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  <YOUR CONFIG KEY HERE>

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
