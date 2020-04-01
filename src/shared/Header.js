import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuButton from './MenuButton';

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <MenuButton navigation={navigation} />
      <View style={styles.headerTitle}>
        <Image
          source={require('../../assets/heart_logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 350,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

export default Header;
