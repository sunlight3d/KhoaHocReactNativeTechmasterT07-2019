//Component as "Class"
import React, {Component, Fragment} from 'react'
import {Text} from 'react-native'

export default class ComponentA extends Component {
    /*
    constructor(props) {
        super(props)          
        //destructuring 
        let {name="", email=""} = this.props //default value 
        alert(`name = ${name}, email = ${email}`)
    }
    */
   constructor({name, email}) {
        super({name, email})         
   }
    render() {
        const {name, email} = this.props
        return <Fragment>
            <Text style={{fontSize: 30, color: 'red'}}>
                Name = {name}, Email = {email}
            </Text>
        </Fragment>
    }
}