import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDDrhXbXqExt9DX9YKnl4OZTdVfqcqn-oU",
    authDomain: "auth-shop-3d16c.firebaseapp.com",
    projectId: "auth-shop-3d16c",
    storageBucket: "auth-shop-3d16c.appspot.com",
    messagingSenderId: "816039547665",
    appId: "1:816039547665:web:56c122f52d55387f9d32b0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };