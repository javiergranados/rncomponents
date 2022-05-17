import React from 'react';
import { Alert, Button, Platform, StyleSheet, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Title',
      'This is my message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: true, onDismiss: () => console.log('onDismiss') },
    );
  };

  const showPrompt = () => {
    Alert.prompt(
      'Are you sure?',
      "This can't be reverted",
      (response) => console.log('response: ', response),
      'secure-text',
      '',
      'number-pad',
    );
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      {Platform.OS === 'ios' && <Button title="Show Prompt" onPress={showPrompt} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
