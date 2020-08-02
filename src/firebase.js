import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCE99VxEoE2ExXSIZtLON_7TJTzh4SlopQ",
  authDomain: "tinder-cline.firebaseapp.com",
  databaseURL: "https://tinder-cline.firebaseio.com",
  projectId: "tinder-cline",
  storageBucket: "tinder-cline.appspot.com",
  messagingSenderId: "990717050720",
  appId: "1:990717050720:web:48a366a5422a3a125a6805",
  measurementId: "G-T4QJH65WM5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
