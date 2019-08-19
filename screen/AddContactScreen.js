import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class AddContactScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Contacts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
