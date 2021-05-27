import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChlGpYi5t75CpLb04yOxFiD29VhX1XCAw",
  authDomain: "facebook-clone-79fa5.firebaseapp.com",
  projectId: "facebook-clone-79fa5",
  storageBucket: "facebook-clone-79fa5.appspot.com",
  messagingSenderId: "513366150057",
  appId: "1:513366150057:web:d5366bd37dbcf4836b12b8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
