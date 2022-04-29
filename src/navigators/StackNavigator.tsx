import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';

export type RootStackParamList = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="HomeScreen" component={HomeScreen} />
      <RootStack.Screen name="Animation101Screen" component={Animation101Screen} />
      <RootStack.Screen name="Animation102Screen" component={Animation102Screen} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
