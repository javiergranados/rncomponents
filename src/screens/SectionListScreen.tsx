import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { superHeros } from '../data/superHeros';

export const SectionListScreen = () => {
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <SectionList
        sections={superHeros}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title="SectionList" />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 70 }}>
            <HeaderTitle title={`Total houses: ${superHeros.length}`} />
          </View>
        )}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section.title} />
          </View>
        )}
        renderSectionFooter={({ section }) => <HeaderTitle title={`Total: ${section.data.length}`} />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
});
