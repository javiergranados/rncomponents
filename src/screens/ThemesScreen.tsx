import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context';

export const ThemesScreen = () => {
  const {
    theme: { colors },
    setLightTheme,
    setDarkTheme,
  } = useContext(ThemeContext);

  const lightButton = (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: colors.primary }}
      activeOpacity={0.8}
      onPress={setLightTheme}
    >
      <Text style={styles.text}>Light</Text>
    </TouchableOpacity>
  );

  const darkButton = (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: colors.primary }}
      activeOpacity={0.8}
      onPress={setDarkTheme}
    >
      <Text style={styles.text}>Dark</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderTitle title="Themes" />
      <View style={styles.buttonsContainer}>
        {lightButton}
        {darkButton}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
});
