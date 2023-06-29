// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS7tEd2bDO8GG5qywTG8aw9NTww5CuS5M",
    authDomain: "bookstay-28e2d.firebaseapp.com",
    projectId: "bookstay-28e2d",
    storageBucket: "bookstay-28e2d.appspot.com",
    messagingSenderId: "52778758172",
    appId: "1:52778758172:web:6b65f0229c30484107efd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };