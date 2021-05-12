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

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherData
      })
    } catch (error) {
      console.error('Error al crear el usuario', error.message)
    }
  }

  return userRef
};

export const addCollectionAndItems = async (collectionKey, objects) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objects.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit()
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    }
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = auth.onAuthStateChanged(userAuth => {
      unsuscribe();
      resolve(userAuth);
    }, reject)
  });
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(googleProvider).catch(() => { });

export default firebase;