import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button
        title="Add"
        onPress={() => navigation.navigate('AddContact')}
        color="#a41034"
      />
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>ContactList</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
