import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddContactForm from '../AddContactForm';

import {connect} from 'react-redux';
import {addContact} from '../redux/actions';

class AddContactScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New Contact',
  };

  handleSubmit = formState => {
    this.props.addContact({name: formState.name, phone: formState.phone});
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

export default connect(null, {addContact: addContact})(AddContactScreen);
