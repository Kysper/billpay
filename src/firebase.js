// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth, createUser, onAuthStateChanged, signInUser, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGE_SENDER,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseURL: process.env.DB_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const auth = getAuth();

createUser(auth, email, password).then((userCredential) => {
    const user = userCredential.user;

}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
})


signInUser(auth, email, password).then((userCredential) => {
    const user = userCredential.user;

}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
})

signInWithPopup(auth, provider).then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessTokenl

    const user = result.user;
}).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    const email = error.customData.email;

    const credential = GoogleAuthProvider.credentialFromError(error);
})

signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log("Logged in");
    } else {
        console.log("Not logged in");
    }
})

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

