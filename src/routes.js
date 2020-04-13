import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Initial from './views/Initial';
import Home from './views/Home';

export default function Routes() {
  return (
    <NavigationContainer initialRouteName="Initial">
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Initial" component={Initial} />
        <AppStack.Screen name="Home" component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
