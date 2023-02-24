
import { initializeApp } from "firebase/app";
import { getAuth,
     GoogleAuthProvider, 
     signInWithPopup ,
     signInWithEmailAndPassword,
     createUserWithEmailAndPassword,
     signOut,
    //  onAuthStateChanged
    } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCtyojmjwP5s5uqQ_wuFGaC2a7btavcdbQ",
    authDomain: "mydavid-12179.firebaseapp.com",
    projectId: "mydavid-12179",
    storageBucket: "mydavid-12179.appspot.com",
    messagingSenderId: "441929777497",
    appId: "1:441929777497:web:144ee40b42945657124c48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const theAuth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const theSigninWithpop = async () => await signInWithPopup(theAuth, provider)


export const db = getFirestore();


export const createuserInDB = async (res) => {
    const theDoc = doc(db, "users", res.uid);
    const getTheDoc = await getDoc(theDoc);
    console.log(getTheDoc.exists())
   
    try {

        if (!getTheDoc.exists()) {
            const { displayName, email } = res;
            const DateCreated = new Date();
            const details = { displayName, DateCreated, email }

            await setDoc(theDoc, details)
        }
    } catch (error) {
        console.log("this is the error", error)
    } return theDoc
}

// signing in with email and pass
export const UserWithEmailandPass = async(email,password) =>  await signInWithEmailAndPassword(theAuth,email,password)


// creating user 
export const CreatingUserwithEmailandPass = async(email,password)=> createUserWithEmailAndPassword(theAuth,email,password);

// sign out
export const thesignOut = async() => await signOut(theAuth)
