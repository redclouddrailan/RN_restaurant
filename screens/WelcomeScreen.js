import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class WelcomeScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Chow!</Text>
        <Button
          large
          buttonStyle={{
            width: 179,
            backgroundColor: 'transparent',
            borderColor: '#FF8539',
            borderRadius: 15,
            borderWidth: 4
          }}
          title="Sign In"
        />

        <Button
          title="Create Account"
          large
          buttonStyle={{
            marginTop: 20,
            backgroundColor: 'transparent',
            borderColor: '#FF8539',
            borderRadius: 15,
            borderWidth: 4
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6200',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    height: 100,
      color: 'white',
      fontSize: 40
  }
});


export default WelcomeScreen;
