import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  { name: 'Animation 101', icon: 'cube-outline', components: 'Animation101Screen' },
  { name: 'Animation 102', icon: 'albums-outline', components: 'Animation102Screen' },
];

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const listHeader = (
    <View style={{ marginTop: top + 20 }}>
      <Text style={appStyles.title}>Opciones de menú</Text>
    </View>
  );

  const renderItem = (menuItem: MenuItem) => (
    <View>
      <Text>
        {menuItem.name} - {menuItem.icon}
      </Text>
    </View>
  );

  return (
    <View style={{ ...styles.container, ...appStyles.gobalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={listHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
