import React from 'react';
import { View, Text } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  title: string;
}

const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={appStyles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
