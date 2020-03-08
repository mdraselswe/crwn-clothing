import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBn3hJWE-dHN2lbVdLtPrb9m8FzSwybmds",
  authDomain: "crwn-db-1c904.firebaseapp.com",
  databaseURL: "https://crwn-db-1c904.firebaseio.com",
  projectId: "crwn-db-1c904",
  storageBucket: "crwn-db-1c904.appspot.com",
  messagingSenderId: "617094721260",
  appId: "1:617094721260:web:4772a6f460c1be35c63fc9",
  measurementId: "G-MNMGCLYDJQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
