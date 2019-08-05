import React, { Component } from 'react'
import {View, 
    TextInput, 
    TouchableOpacity,
    Image,
    SafeAreaView,
    StyleSheet,
    TouchableHighlight,
    KeyboardAvoidingView, 
    ScrollView, 
    Text
} from 'react-native'
import {firebaseManager} from '../Firebase/Firebase'
export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        //init state = only in contructor !
        this.state = {
            borderColorOfText: 'red',
            email: '',
            password: '',
            validateEmail:'',
            validatePassword:''
        }
    }
    componentDidMount() {
        firebaseManager.authentication.onAuthStateChanged((user) => {
            if (user) {
                const {uid, email, refreshToken} = user
                alert(`uid = ${uid}`)
            } 
        })
    }
    _validateEmail(text){
        //Regular Expression
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(text);
    }
    signIn() {
        let { email = "", password=""} = this.state
        firebaseManager.signInWithEmailAndPassword(email, password).then(user => {
            alert(`success login, user = ${JSON.stringify(user)}`)
        }).catch(error => {
            alert(`sign in failed: ${error}`)
        })
    }
    render() {
        console.log(`this.state.colodddd = ${this.state.borderColorOfText}`)
        let {validateEmail, validatePassword} = this.state
        
        return <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container} 
                    keyboardVerticalOffset = {20}
                    behavior="padding">
            <ScrollView 
                style={{flex: 1, width: '100%'}}
                contentContainerStyle={{alignItems: 'center'}}>
            <Image source={require('../images/pet.jpg')} 
                style={styles.imageProfile} />
            <TextInput onChangeText = {(text) => {
                
            }}
                placeholder = {"Enter your email"}
                keyboardType={"email-address"}
                secureTextEntry={false}
                onChangeText = {(email) => {
                    this.setState({email})
                    if(this._validateEmail(email) == false) {
                        this.setState({validateEmail: 'Invalid email'})
                    } else {
                        this.setState({validateEmail: ''})
                    }
                }}
                style={[styles.textInput, {borderColor: this.state.borderColorOfText}]}
            />
            {validateEmail.length > 0 && <Text style={styles.checkInput}>{validateEmail}</Text>}
            <TextInput 
                placeholder={"Enter your password"}
                keyboardType={"default"}
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText = {(password) => {
                    this.setState({password})
                    if(password.length <  3) {
                        this.setState({validatePassword: 'Password must be at least 3 characters'})
                    } else {
                        this.setState({validatePassword: ''})
                    }
                }}
            />
            {validatePassword.length > 0 && <Text style={styles.checkInput}>{validatePassword}</Text>}
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                        this.signIn()                                        
                }}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>    
            <TouchableOpacity style={styles.registerButton}
                onPress= {() => {
                    //destructuring
                    let {email, password} = this.state
                    //alert(`email = ${email}, password = ${password}`)
                    firebaseManager.createUserWithEmailAndPassword(email, password).then((result) => {
                        
                    }).catch(error => {
                        alert(`register failed: ${error}`)
                    })
                }}
            >
                <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>   
            </ScrollView>     
            </KeyboardAvoidingView> 
        </SafeAreaView>        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageProfile: {
        width: 140,
        height: 140,
        marginTop: 40,
        borderRadius: 70
    }, 
    textInput: {     
        marginTop: 20,   
        height: 45,
        width: '90%',
        borderRadius: 5,
        borderColor: 'blue',
        borderWidth: 1,
        paddingHorizontal: 10

    },
    checkInput: {
        color: 'red',
        textAlign: 'left',
        width: '90%',
        paddingTop: 5
    },
    loginButton: {
        marginTop: 20,
        width: '90%',        
    },
    registerButton: {
        marginTop: 20,
        width: '90%',                
    },
    loginButtonText: {
        fontSize: 20,
        height: 45,
        backgroundColor: 'green',
        textAlign: 'center',
        lineHeight: 45  ,
        color: 'white'      
    },
    registerButtonText: {
        fontSize: 20,
        height: 45,
        backgroundColor: 'orange',
        textAlign: 'center',
        lineHeight: 45  ,
        color: 'white'      
    }
})