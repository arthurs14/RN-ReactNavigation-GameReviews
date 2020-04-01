import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import { globalStyles } from '../styles/global';
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
          headerBackground: () => (
            <Image
              source={require('../../assets/game_bg.png')}
              style={globalStyles.header}
            />
          ),
        })}
      />
      <MainStack.Screen name="Review Details" component={ReviewDetails} />
    </MainStack.Navigator>
  );
};

export default HomeStack;
