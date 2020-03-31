import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from './MenuButton';

const Header = ({ navigation, title }) => {
  return (
    <View style={styles.header}>
      <MenuButton navigation={navigation} />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: 370,
    height: 50,
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
});

export default Header;
