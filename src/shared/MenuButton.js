import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const MenuButton = ({ navigation }) => {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.icon}>
      <Icon name='menu' size={28} onPress={openMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 16,
  },
});

export default MenuButton;
