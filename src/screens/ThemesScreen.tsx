import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export const ThemesScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle title="Themes" />
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.text}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#5856D6',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
});
