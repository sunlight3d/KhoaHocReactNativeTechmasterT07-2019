import React, {Component} from 'react'
import {View, 
    Text, 
    SafeAreaView,
    StyleSheet} from 'react-native'
//Main contains ComponentA, ComponentB
import ComponentA from './ComponentA'
import {ComponentB} from './ComponentB'
import {sum22, 
    squared, 
    products,
    doSomething, doSomething2} from '../controllers/Calculations'

//export = "public"
export default class MainComponent extends Component {
    constructor(props) {
        //props = read-only properties
        super(props)
    }
    mapProductsToProductNameText() {
        let listOfTexts = products.map(p => {
            return <Text style={{margin: 20}}>
                {p.productName} - {p.year}
            </Text>
        })
        return listOfTexts
    }
    //render
    render() {        
        //alert(`sum 2 numbers = ${sum22(1, 2)}`) //string concatenation
        //doSomething()
        doSomething2()
        return (<SafeAreaView style={styles.container}>
            <Text style={styles.centerText}>
                Hello world
            </Text>
            <ComponentA />
            <ComponentB />
            {this.mapProductsToProductNameText()}
        </SafeAreaView>)
    }
}
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