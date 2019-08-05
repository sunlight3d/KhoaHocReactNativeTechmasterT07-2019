import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDPSxXShX9ewn7Aqjl-8ubPpKGHGTnyeg0",
    authDomain: "reactnativetutorial-d247d.firebaseapp.com",
    databaseURL: "https://project-id.firebaseio.com",
    projectId: "reactnativetutorial-d247d",
    storageBucket: "reactnativetutorial-d247d.appspot.com",
    messagingSenderId: "994950783513",
    appID: "1:994950783513:ios:fa77c8077283cc2f",
}
firebase.initializeApp(firebaseConfig)
class FirebaseManager {
    constructor() {        
        this.database = firebase.database()
        this.authentication = firebase.auth()
    }
    createUserWithEmailAndPassword = async (email, password) => {
        try {
            await this.authentication.createUserWithEmailAndPassword(email, password)
        } catch(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(`Error = ${errorMessage}`)
        }
    }
    signInWithEmailAndPassword = (email, password) => {
        return this.authentication.signInWithEmailAndPassword(email, password)
    }
}

var firebaseManager = new FirebaseManager()
export {
    firebaseManager
}
