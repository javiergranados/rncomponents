import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { superHeros } from '../data/superHeros';

export const SectionListScreen = () => {
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <SectionList
        sections={superHeros}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text>{item}</Text>}
        stickySectionHeadersEnabled
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section.title} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
});
