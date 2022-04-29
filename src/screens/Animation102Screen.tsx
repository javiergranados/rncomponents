import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
