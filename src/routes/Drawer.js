import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const RootDrawerNavigator = createDrawerNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator>
        <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
        <RootDrawerNavigator.Screen name="About" component={AboutStack} />
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
