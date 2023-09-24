import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcKyvyDjy5HViug7_MYYyDvgMxqYETLZU",
  authDomain: "listado-personas-48fcf.firebaseapp.com",
  databaseURL: "https://listado-personas-48fcf-default-rtdb.firebaseio.com",
  projectId: "listado-personas-48fcf",
  storageBucket: "listado-personas-48fcf.appspot.com",
  messagingSenderId: "938543601604",
  appId: "1:938543601604:web:7daaea5efee237dd64f691",
  measurementId: "G-ELRBG2TM8Z",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
