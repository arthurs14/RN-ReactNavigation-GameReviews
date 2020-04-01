import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ReviewForm from '../screens/ReviewForm';

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Animal Crossing New Horizons',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    { title: 'Apex Legends', rating: 4, body: 'lorem ipsum', key: '2' },
    {
      title: 'Call of Duty: Warzone',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  // const pressHandler = () => {
  //   navigation.navigate('Review Details');
  // };

  return (
    <View style={globalStyles.container}>
      {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
      {/* <Button title='Go to Review Details' onPress={pressHandler} /> */}
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <Icon
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <ReviewForm />
        </View>
      </Modal>

      <Icon
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Review Details', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
