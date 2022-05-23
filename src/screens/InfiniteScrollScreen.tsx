import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const INCREMENT_INTERVAL = 5;

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const loadMore = () => {
    const lastNumber = numbers[numbers.length - 1];
    const incrementedArray: number[] = [...numbers];

    Array.from({ length: INCREMENT_INTERVAL }).forEach((_, i: number) => {
      incrementedArray.push(i + 1 + lastNumber);
    });

    setNumbers(incrementedArray);
  };

  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={() => <HeaderTitle title="Infinite scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    height: 150,
  },
});
