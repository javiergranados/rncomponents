import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context';

interface Props {
  initialValue: boolean;
  onChange?: (value: boolean) => void;
}

const CustomSwitch = ({ initialValue, onChange }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange && onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: colors.primary }}
      thumbColor={Platform.OS === 'android' ? colors.primary : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
