//Component as "function"
import React from 'react'
import {Text, View} from 'react-native'

//function-style component. VD: Header
const ComponentB = ({x, y}) => {    
    return <View>
        <Text style={{fontSize: 30}}>x= {x}, y = {y}</Text>
    </View>
}
export {
    ComponentB
}

/*
//Nodejs style
module.exports = {
    ComponentB
}
*/