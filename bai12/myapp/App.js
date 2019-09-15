/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  TextInput, 
  Platform,
  StyleSheet
} from 'react-native';
import {getSize} from './Utilities'


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.textInput}>

      </TextInput>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  textInput: {
    fontSize: getSize(18, 25),
    padding: getSize(15, 30),
    height: getSize(40, 120),
    marginHorizontal: getSize(20, 30),
    backgroundColor: 'green'
  }
});

export default App;
