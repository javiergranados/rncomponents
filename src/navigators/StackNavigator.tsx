import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
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
    </RootStack.Navigator>
  );
};

export default StackNavigator;
