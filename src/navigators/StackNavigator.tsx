import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="HomeScreen" options={{ title: 'Home' }} component={HomeScreen} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
