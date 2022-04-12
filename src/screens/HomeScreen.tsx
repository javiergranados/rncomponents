import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [{ name: 'Animation 101', icon: 'cube-outline', components: 'Animation101Screen' }];

const HomeScreen = () => {
  const renderItem = (menuItem: MenuItem) => (
    <View>
      <Text>
        {menuItem.name} - {menuItem.icon}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Opciones de menú</Text>
      <FlatList data={menuItems} renderItem={({ item }) => renderItem(item)} keyExtractor={(item) => item.name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});

export default HomeScreen;
