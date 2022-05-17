import React from 'react';
import { Alert, Button, Platform, StyleSheet, View } from 'react-native';
import prompt from 'react-native-prompt-android';
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

  const showIOSPrompt = () => {
    Alert.prompt(
      'Are you sure?',
      "This can't be reverted",
      (response) => console.log('response: ', response),
      'secure-text',
      '',
      'number-pad',
    );
  };

  const showExternalPrompt = () => {
    prompt(
      'Are you sure?',
      "This can't be reverted",
      [
        { text: 'Cancel', style: 'cancel', onPress: () => console.log('Cancel Pressed') },
        { text: 'OK', onPress: (response) => console.log('response: ', response) },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Alerts" />
      <Button title="Show Alert" onPress={showAlert} />
      {Platform.OS === 'ios' && (
        <>
          <View style={{ height: 10 }} />
          <Button title="Show iOS Prompt" onPress={showIOSPrompt} />
        </>
      )}
      <View style={{ height: 10 }} />
      <Button title="Show External Prompt" onPress={showExternalPrompt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
