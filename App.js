import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.titleStyle}>Chow App</Text>
         <Button
         large
          title='Sign In'
          backgroundColor='white'
          color='black'
          buttonStyle={styles.createAccountStyle}
          />

          <Button
          large
           title='Create Account'
           backgroundColor='white'
           color='black'
           buttonStyle={styles.createAccountStyle}
           />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  titleStyle: {
    fontSize: 30,
    color: 'white'
  },
  createAccountStyle: {
    marginTop: 20
  }


});
