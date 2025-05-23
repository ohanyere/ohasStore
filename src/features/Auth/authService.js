import {getAuth,updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, parseActionCodeURL } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase.config";

const auth =  getAuth()
const signIn = async (email, password) => {
    const userCredencial = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredencial.user
    return user
}

const signOut = () => {
  return  auth.signOut()
}

const signUp = async(email, password) => {
    const userCredencial = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredencial.user
    updateProfile({displayName : user.displayName})
    const docRef = doc(db, "users", user.uid)
    const userData = await setDoc(docRef, {
        name : user.displayName,
        email: user.email
    })

    return userData
}

const authservice = {
    signIn,
    signOut,
    signUp
}

export  default authService