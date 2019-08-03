/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';

export default class App extends Component {
  componentDidMount(){
    this.getStudentsFromApiAsync()
  }
  getStudentsFromApiAsync() {
    return fetch('http://112.213.94.254:3000/hocsinh')
      .then((response) => {
        return response.json()
        
      })
      .then((responseJson) => {
        alert(`responseJson = ${JSON.stringify(responseJson)}`)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    return (
      <SafeAreaView>
        <FlatList>
  
        </FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },  
});

