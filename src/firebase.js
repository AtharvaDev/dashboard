import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyAJyp9qcLU2RaMthfpAqWDUXd9_vzD8EMM",
  authDomain: "dashboard-by-ad.firebaseapp.com",
  databaseURL: "https://dashboard-by-ad.firebaseio.com",
  projectId: "dashboard-by-ad",
  storageBucket: "dashboard-by-ad.appspot.com",
  messagingSenderId: "978772335602",
  appId: "1:978772335602:web:d90a6401b28b7c9f86a96b",
  measurementId: "G-BEJMYRFL8V"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
