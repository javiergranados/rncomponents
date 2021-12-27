import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test screen</Text>
      <Icon name="star-outline" size={50} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});

export default TestScreen;
