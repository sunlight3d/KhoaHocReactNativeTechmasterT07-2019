/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginComponent from './components/LoginComponent';
import CategoriesComponent from './components/CategoriesComponent';
import TabProductsComponent from './components/TabProductsComponent';
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
    CategoriesComponent: {
        screen: CategoriesComponent,
        navigationOptions: {
            header: null
        }
    },
    TabProductsComponent: {
        screen: TabProductsComponent,
        navigationOptions: {
            header: null
        }
    }

}, {
    //initialRouteName: 'LoginComponent'//root component 
    initialRouteName: 'CategoriesComponent'//root component 
})
const AppContainer = createAppContainer(StactNavigator);
AppRegistry.registerComponent(appName, () => AppContainer);
