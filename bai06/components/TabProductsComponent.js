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
} from 'react-native'

export default class TabProductsComponent extends Component {
    constructor(props) {
        super(props)        
    }
    componentDidMount() {        
        const {goBack, navigate, getParam} = this.props.navigation 
        alert(JSON.stringify(getParam('item')))
    }
    
    render() {                
        return <SafeAreaView style={styles.container}>
            
        </SafeAreaView>        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red',
        flexDirection: 'column',
        alignItems: 'center',        
    },    
})