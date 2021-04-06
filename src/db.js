import  firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_dxxr05RgCdVDkhKLzEEGttewSwv4bDQ",
    authDomain: "todo-1d947.firebaseapp.com",
    projectId: "todo-1d947",
    storageBucket: "todo-1d947.appspot.com",
    messagingSenderId: "383830783322",
    appId: "1:383830783322:web:5f38d4867b84499baaef63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const  DB = firebase.firestore();
export default DB
