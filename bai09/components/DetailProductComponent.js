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
    ActivityIndicator,
    Dimensions,
    Text,  
    CameraRoll  
} from 'react-native'
import { COLOR_GREEN, COLOR_RED, globalCSS, COLOR_ORANGE} from '../GlobalCSS'
const {width, height} = Dimensions.get('window')
import ImagePicker from 'react-native-image-crop-picker';
export default class DetailProductComponent extends Component {
    constructor(props) {
        super(props)
        //init state = only in contructor !
        this.state = {
            borderColorOfText: 'red',
            name: '',
            imageURL: 'https://media1.tenor.com/images/db85ba00c6073b451a8f05156a66524e/tenor.gif?itemid=9856796',
            description: '',
            isLoading: false
        }
    }
    componentDidMount() {        
        const {goBack, navigate, getParam} = this.props.navigation 
        //alert(JSON.stringify(getParam('item')))       
        let {name, imageURL, description} = getParam('item')
        //alert(imageURL)        
        this.setState({name, imageURL, description})        
    }    
    
    render() {       
        let {name, imageURL, description, isLoading} = this.state
        return <SafeAreaView style={styles.container}>
            {isLoading && <View style={styles.loadingView}>                
                <ActivityIndicator size="large" color="red" />
            </View>}
            <KeyboardAvoidingView style={styles.container} 
                    keyboardVerticalOffset = {20}
                    behavior="padding">
            <ScrollView 
                style={{flex: 1, width: '100%'}}
                contentContainerStyle={{alignItems: 'center'}}>
            {/* <Image source={require('../images/pet.jpg')} 
                style={styles.imageProfile} /> */}
            <TouchableOpacity onPress = {() => {
                    ImagePicker.openPicker({
                        multiple: true
                      }).then(images => {
                        console.log(images);
                      })
                }} >
                <Image source={{uri: imageURL}}                
                style={styles.imageProfile} />
            </TouchableOpacity>
            
            <TextInput onChangeText = {(text) => {
                
            }}
                placeholder = {"Enter your name"}
                secureTextEntry={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                value={name}
                onChangeText = {(name) => {
                    this.setState({name})                    
                }}
                style={[styles.textInput, {borderColor: this.state.borderColorOfText}]}
            />            
            <TextInput 
                placeholder={"Enter your description"}
                keyboardType={"default"}                
                style={styles.textInput}
                value={description}
                onChangeText = {(description) => {
                    this.setState({description})                    
                }}
            />            
            
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                                       
                }}
            >
                <Text style={[styles.loginButtonText, {backgroundColor: COLOR_GREEN}]}>
                    Save</Text>
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
        alignItems: 'center',        
    },
    loadingView: {
        position: 'absolute',
        top: 0,
        left: 0, 
        width, height,
        backgroundColor:'rgba(0,0,0, 0.2)',
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center'
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