/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginComponent from './components/LoginComponent';
import ProductsComponent from './components/ProductsComponent';
import {name as appName} from './app.json';
import {createAppContainer, createStackNavigator} from 'react-navigation'
//createStackNavigator = HOC = Higher order component
//added props: 
const StactNavigator = createStackNavigator({
    LoginComponent: {
        screen: LoginComponent,
        navigationOptions: {
            header: null
        }
    },
    ProductsComponent: {
        screen: ProductsComponent,
        navigationOptions: {
            header: null
        }
    }
}, {
    initialRouteName: 'LoginComponent'//root component 
})
const AppContainer = createAppContainer(StactNavigator);
AppRegistry.registerComponent(appName, () => AppContainer);
