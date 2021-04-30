import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD_hpnjHTrcVYxCBX-JYfRChu7_rNklmRo",
  authDomain: "ecommerce-9d20f.firebaseapp.com",
  projectId: "ecommerce-9d20f",
  storageBucket: "ecommerce-9d20f.appspot.com",
  messagingSenderId: "460753234462",
  appId: "1:460753234462:web:a8b4086e8acab8ae881c0f",
  measurementId: "G-71KZXM0HRJ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;