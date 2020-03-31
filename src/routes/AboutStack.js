import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';

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
      <Stack.Screen
        name="About GameReviews"
        component={About}
        options={({ navigation }) => ({
          headerTitle: props => (
            <Header
              {...props}
              navigation={navigation}
              title="About Game Reviews"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
