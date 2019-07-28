import React, {Component} from 'react'
import {View, 
    Text, 
    SafeAreaView,
    StyleSheet} from 'react-native'
import {withFirebase} from './Firebase'
//Main contains ComponentA, ComponentB

//export = "public"
export class MainComponent extends Component {
    constructor(props) {
        //props = read-only properties
        super(props)
    }
    componentDidMount() {
        alert(this.props.firebase)
        this.props.firebase.auth.signInWithEmailAndPassword("acbdd@gmail.com", "ssww1234")
            .then(user => {                
            }).catch(error => {
                alert(error)
            })
    }
    //render
    render() {        
        //alert(`sum 2 numbers = ${sum22(1, 2)}`) //string concatenation    
        return (<SafeAreaView style={styles.container}>
            <Text style={styles.centerText}>
                Hello world
            </Text>
        </SafeAreaView>)
    }
}
export default withFirebase(MainComponent)
//factory method
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        fontSize: 50,
        alignSelf: 'center',
        backgroundColor: 'rgb(255, 0, 0)'
    }
})
