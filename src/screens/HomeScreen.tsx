import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { appStyles } from '../theme/appTheme';
import FlatListMenuItem from '../components/FlasListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

const HomeScreen = () => {
  const itemSeparator = () => <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />;

  return (
    <View style={{ ...styles.container, ...appStyles.gobalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={<HeaderTitle title="Menu options" />}
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
