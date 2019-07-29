//Component as "Class"
import React, {Component, Fragment} from 'react'
import {Text} from 'react-native'

export default class ComponentA extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Fragment>
            <Text style={{fontSize: 30, color: 'red'}}>
                This is componentA
            </Text>
        </Fragment>
    }
}