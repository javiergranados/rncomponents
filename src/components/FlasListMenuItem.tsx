import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color="gray" size={23} />
        <Text style={styles.itemText}>{menuItem.name}</Text>
        <Icon name="chevron-forward-outline" color="gray" size={23} style={styles.arrowIcon} />
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
