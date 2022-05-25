import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context';
import HomeScreen from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { SectionListScreen } from '../screens/SectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/SlidesScreen';
import { ThemesScreen } from '../screens/ThemesScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
  PullToRefreshScreen: undefined;
  SectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
  SlidesScreen: undefined;
  ThemesScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
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
        <RootStack.Screen name="SectionListScreen" component={SectionListScreen} />
        <RootStack.Screen name="ModalScreen" component={ModalScreen} />
        <RootStack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        <RootStack.Screen name="SlidesScreen" component={SlidesScreen} />
        <RootStack.Screen name="ThemesScreen" component={ThemesScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
