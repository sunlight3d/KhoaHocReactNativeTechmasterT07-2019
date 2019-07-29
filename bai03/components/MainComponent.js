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
import {TaskA} from './Tasks/TaskA'
import {TaskB} from './Tasks/TaskB'
import {TaskC} from './Tasks/TaskC'

//export = "public"
export default class MainComponent extends Component {
    constructor(props) {
        //props = read-only properties
        super(props)
    }
    doTask123(){
        let taskA = new TaskA()
        
        let taskB = new TaskB()
        let taskC = new TaskC()
        taskA.taskC = taskC
        taskB.taskC = taskC
        
        taskA.task1()
        taskB.task2()

    }
    componentDidMount() {
        this.doTask123() 
    }
    //render
    render() {        
        //alert(`sum 2 numbers = ${sum22(1, 2)}`) //string concatenation
        //doSomething()
        //doSomething2()   
            
        return (<SafeAreaView style={styles.container}>
            <Text style={styles.centerText}>
                Hello world
            </Text>
            <ComponentA />
            <ComponentB />
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