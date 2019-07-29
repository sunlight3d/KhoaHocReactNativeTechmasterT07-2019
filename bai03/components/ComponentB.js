//Component as "function"
import React from 'react'
import {Text, View} from 'react-native'

const ComponentB = (props) => {
    return <View>
        <Text>This is component B</Text>
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