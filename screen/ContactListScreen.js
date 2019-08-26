import React from 'react';
import {Button, View, StyleSheet, Text} from 'react-native';
import contacts from '../contacts';
import SectionListContacts from '../SectionListContacts';

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

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}));
  };

  handleSelectContact = contact => {
    this.props.navigation.push('ContactDetail', contact);
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        {this.state.showContacts && (
          <SectionListContacts
            contacts={contacts}
            onSelectContact={this.handleSelectContact}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
