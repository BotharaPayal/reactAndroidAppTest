/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SearchPage from './SearchPage';
import SearchResults from './SearchResults';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
// class SearchPage extends Component<Props> {
// // export default class App extends Component<Props> {
//
//   static navigationOptions = {
//     title: 'Property Finder',
//   };
//
//   render() {
//     return <Text style={styles.description}>Search for houses to buy!</Text>;
//
//     // return <Text style={styles.description}>Search for houses to buy! (Again)</Text>;
//     // return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
//   }
//   // render() {
//   //   return (
//   //     <View style={styles.container}>
//   //       <Text style={styles.welcome}>Welcome to MY React Native!</Text>
//   //       <Text style={styles.instructions}>To get started, edit App.js</Text>
//   //       <Text style={styles.instructions}>{instructions}</Text>
//   //     </View>
//   //   );
//   // }
// }

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
});
export default App;

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
