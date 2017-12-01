import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';


import DetailScreen from './screens/DetailScreen';
import LoginScreen from './screens/LoginScreen';
import MapScreen from './screens/MapScreen';
import RatingScreen from './screens/RatingScreen';
import RegisterScreen from './screens/RegisterScreen';
import ReservationDetailScreen from './screens/ReservationDetailScreen';
import TransactionScreen from './screens/TransactionScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen }
    }//End TabNavigator

  ); // End MainNavigator
    return (

        <View style={styles.container}>
          <MainNavigator />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
