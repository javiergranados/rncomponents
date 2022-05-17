import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlasListMenuItem';
import { menuItems } from '../data/menuItems';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const listHeader = () => (
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
      <Text style={appStyles.title}>Opciones de menú</Text>
    </View>
  );

  const itemSeparator = () => <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />;

  return (
    <View style={{ ...styles.container, ...appStyles.gobalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={listHeader}
        ItemSeparatorComponent={itemSeparator}
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
