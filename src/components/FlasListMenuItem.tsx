import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ThemeContext } from '../context';
import { RootStackParamList } from '../navigators/StackNavigator';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}

type FlatListMenuItemProps = StackNavigationProp<RootStackParamList>;

const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation<FlatListMenuItemProps>();
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as keyof RootStackParamList)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={23} />
        <Text style={{ ...styles.itemText, color: colors.text }}>{menuItem.name}</Text>
        <Icon name="chevron-forward-outline" color={colors.primary} size={23} style={styles.arrowIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  arrowIcon: {
    position: 'absolute',
    right: 0,
  },
});

export default FlatListMenuItem;
