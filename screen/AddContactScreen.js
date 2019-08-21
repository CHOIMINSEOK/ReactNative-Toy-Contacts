import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddContactForm from '../AddContactForm';

export default class AddContactScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New Contact',
  };

  handleSubmit = formState => {
    this.props.navigation.navigate('ContactList');
  };

  render() {
    return <AddContactForm onSubmit={this.handleSubmit} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
