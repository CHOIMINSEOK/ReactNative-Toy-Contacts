import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

export default class LoginScreen extends React.Component {
  _login = () => {
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Press to Log In" onPress={this._login} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});