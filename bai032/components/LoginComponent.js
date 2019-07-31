import React, { Component } from 'react'
import {View, 
    TextInput, 
    TouchableOpacity,
    Image,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native'

export default class LoginComponent extends Component {
    constructor(props) {
        super(props)
        //init state = only in contructor !
        this.state = {
            borderColorOfText: 'red'
        }
    }
    render() {
        console.log(`this.state.colodddd = ${this.state.borderColorOfText}`)
        return <SafeAreaView style={styles.container}>
            <Image source={require('../images/pet.jpg')} 
                style={styles.imageProfile} />
            <TextInput onChangeText = {(text) => {
                
            }}
                placeholder = {"Enter your email"}
                keyboardType={"email-address"}
                secureTextEntry={false}
                style={[styles.textInput, {borderColor: this.state.borderColorOfText}]}
            />
            <TextInput onChangeText={(text) => {
            }}
                placeholder={"Enter your password"}
                keyboardType={"default"}
                secureTextEntry={true}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.loginButton}
                onPress= {() => {
                    this.setState({borderColorOfText: 'white'})
                }}
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>            
        </SafeAreaView>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        borderColor: 'red',
        borderWidth: 1,
        paddingHorizontal: 10

    },
    loginButton: {
        marginTop: 20,
        width: '90%',        
    },
    loginButtonText: {
        fontSize: 20,
        height: 45,
        backgroundColor: 'red',
        textAlign: 'center',
        lineHeight: 45  ,
        color: 'white'      
    }
})