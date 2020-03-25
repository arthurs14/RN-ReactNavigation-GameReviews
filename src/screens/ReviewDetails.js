import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

const ReviewDetails = ({ route, navigation }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  const item = route.params;

  return (
    <View style={globalStyles.container}>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <Text>{item.rating}</Text>
      {/* <Text style={globalStyles.titleText}>Review Details Screen</Text>
      <Button title='Back to Home' onPress={pressHandler} /> */}
    </View>
  );
};

export default ReviewDetails;
