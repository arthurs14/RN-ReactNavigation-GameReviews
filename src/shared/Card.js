import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = props => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6, // higher number more curve
    elevation: 3, // how far away it goes from the screen
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 }, //way to give a shadow to something
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});

export default Card;
