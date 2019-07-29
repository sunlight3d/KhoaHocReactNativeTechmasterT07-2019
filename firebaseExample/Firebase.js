/**
 * npm i firebase
 */
import React, {Component} from 'react'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDPSxXShX9ewn7Aqjl-8ubPpKGHGTnyeg0",
    authDomain: "reactnativetutorial-d247d.appspot.com",
    databaseURL: "https://reactnativetutorial-d247d.firebaseio.com",
    projectId: "reactnativetutorial-d247d",
    storageBucket: "reactnativetutorial-d247d.appspot.com",
    messagingSenderId: "994950783513"
}

class Firebase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth()
        this.db = app.database()
        // alert(`this.db = ${this.db}`)
        //Tham khao https://firebase.google.com/docs/database/web/read-and-write
        //this.db.ref("dd")
    }
    sayHello = () => {
        alert('Chao cac ban')
    }
    createUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password)
    
    signInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password)
    

}
const firebase = new Firebase()
export {
    firebase,    
}


