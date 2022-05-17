import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';

interface Props {
  menuItem: MenuItem;
}

type FlatListMenuItemProps = StackNavigationProp<RootStackParamList>;

const FlatListMenuItem = ({ menuItem }: Props) => {
  const navigation = useNavigation<FlatListMenuItemProps>();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as keyof RootStackParamList)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="#5856D6" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <Icon name="chevron-forward-outline" color="#5856D6" size={23} style={styles.arrowIcon} />
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
