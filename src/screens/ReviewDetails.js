import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/Card';

const ReviewDetails = ({ route, navigation }) => {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };

  const item = route.params;
  const rating = item.rating;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{item.title}</Text>
        <Text>{item.body}</Text>
        <View style={styles.rating}>
          <Text>Game Review Rating: </Text>
          <Image source={images.rating[rating]} />
        </View>
      </Card>
      {/* <Text style={globalStyles.titleText}>Review Details Screen</Text>
      <Button title='Back to Home' onPress={pressHandler} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ReviewDetails;
