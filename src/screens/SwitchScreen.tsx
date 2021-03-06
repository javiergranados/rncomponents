import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context';

export const SwitchScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: string) => setState({ ...state, [field]: value });

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switches" />
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
        <CustomSwitch initialValue={state.isActive} onChange={(value) => onChange(value, 'isActive')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
        <CustomSwitch initialValue={state.isHungry} onChange={(value) => onChange(value, 'isHungry')} />
      </View>
      <View style={styles.switchRow}>
        <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
        <CustomSwitch initialValue={state.isHappy} onChange={(value) => onChange(value, 'isHappy')} />
      </View>
      <Text style={styles.stateContainer}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  switchText: {
    fontSize: 25,
  },
  stateContainer: {
    fontSize: 25,
    marginTop: 20,
  },
});
