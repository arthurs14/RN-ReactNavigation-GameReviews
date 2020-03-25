import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import ReviewDetails from './src/screens/ReviewDetails';

// const screens = {
//   Home: {
//     screen: Home,
//   },
// };

const HomeStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} />
        <HomeStack.Screen name='Review Details' component={ReviewDetails} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
