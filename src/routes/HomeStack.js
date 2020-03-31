import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const MainStack = createStackNavigator();

const HomeStack = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
          height: 60,
        },
        headerTintColor: '#444',
      }}>
      <MainStack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: props => (
            <Header {...props} navigation={navigation} title="Game Reviews" />
          ),
        })}
      />
      <MainStack.Screen name="Review Details" component={ReviewDetails} />
    </MainStack.Navigator>
  );
};

export default HomeStack;
