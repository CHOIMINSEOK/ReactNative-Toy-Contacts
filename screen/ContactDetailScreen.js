import React from 'react';
import {View, Text} from 'react-native';

export default class ContactDetailScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('name'),
  })

  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('phone')}</Text>
      </View>
    );
  }
}
