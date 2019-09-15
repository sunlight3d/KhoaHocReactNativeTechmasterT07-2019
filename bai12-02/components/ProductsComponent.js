/**
yarn add react-navigation 
yarn add react-native-gesture-handler react-native-reanimated
 */
import React, {Component} from 'react'
import { observer } from "mobx-react"
import {
    View, 
    SafeAreaView,
    StyleSheet,
    FlatList, 
    Text, 
    TextInput,
    TouchableOpacity
} from 'react-native'
import store from '../store'
let products = [{
    name: 'iphone 5', 
    year: 2015,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
},
{
    name: 'iphone 6', 
    year: 2016,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
},
{
    name: 'iphone 7', 
    year: 2015,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
}
,{
    name: 'iphone 8', 
    year: 2015,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/IPhone_5.png/1024px-IPhone_5.png"
}]
@observer
export default class ProductsComponent extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //alert(Object.keys(this.props.navigation))
        const {goBack, navigate, getParam} = this.props.navigation
        alert(`${getParam('email', '')}`)
    }
    render() {
        //... = clone an object
        return <SafeAreaView>
            <TextInput onChangeText = {(text) => {
                
            }}
                placeholder = {"Enter person name"}
                autoCapitalize={"none"}
                autoCorrect={false}
                value={store.person.name}
                onChangeText = {(text) => {
                    store.person.name = text
                }}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.loginButton}
                onPress={() => {
                      this.props.navigation.goBack();                                     
                }}
            >
                <Text>Change something</Text>
            </TouchableOpacity>
            <FlatList data={products}
                renderItem={({item, index}) => <ProductItem {...item} index={index}>
                </ProductItem>}
                keyExtractor={(product, index) => `${index}`}
            >

            </FlatList>
        </SafeAreaView>
    }
}
const ProductItem = (item) => {
    //alert(JSON.stringify(item))
    const {name, year, imageUrl, index} = item
    return <Text>Chao banannndndndn: {name}, {year}, {index}</Text>
}
const styles = StyleSheet.create({
    constainer : {
        flex: 1
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
    loginButton: {
        marginTop: 20,
        width: '90%',        
    },
})