import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export const TextInputScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle title="TextInputs" />
      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
