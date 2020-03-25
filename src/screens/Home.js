import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: 'Animal Crossing New Horizons', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Apex Legends', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Call of Duty: Warzone', rating: 3, body: 'lorem ipsum', key: '3' },
  ]);

  // const pressHandler = () => {
  //   navigation.navigate('Review Details');
  // };

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title='Go to Review Details' onPress={pressHandler} /> */}
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
