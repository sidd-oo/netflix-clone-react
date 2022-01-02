import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-react-clone-95219.firebaseapp.com",
  projectId: "netflix-react-clone-95219",
  storageBucket: "netflix-react-clone-95219.appspot.com",
  messagingSenderId: "805551529734",
  appId: "1:805551529734:web:0be6f1b07b7245c453c887",
  measurementId: "G-GPZT9WGRQ1",
};

console.log(firebaseConfig.apiKey)
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;