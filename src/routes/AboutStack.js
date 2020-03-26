import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <Stack.Screen name="About GameReviews" component={About} />
    </Stack.Navigator>
  );
};

export default AboutStack;
