import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const MainStack = createStackNavigator();

const HomeStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={Home} />
      <MainStack.Screen name='Review Details' component={ReviewDetails} />
    </MainStack.Navigator>
  );
};

export default HomeStack;
