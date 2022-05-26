import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context';

const ItemSeparator = () => {
  const {
    theme: { dividerColor },
  } = useContext(ThemeContext);

  return <View style={{ borderColor: dividerColor, borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />;
};

export default ItemSeparator;
