import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
  PullToRefreshScreen: undefined;
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
      <RootStack.Screen name="SwitchScreen" component={SwitchScreen} />
      <RootStack.Screen name="AlertScreen" component={AlertScreen} />
      <RootStack.Screen name="TextInputScreen" component={TextInputScreen} />
      <RootStack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
