import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <Switch
        trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
