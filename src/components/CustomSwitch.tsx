import React, { useState } from 'react';
import { Platform, Switch } from 'react-native';

interface Props {
  initialValue: boolean;
  onChange?: (value: boolean) => void;
}

const CustomSwitch = ({ initialValue, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialValue);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange && onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
