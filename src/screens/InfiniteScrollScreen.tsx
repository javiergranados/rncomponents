import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native';
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

    setTimeout(() => {
      setNumbers(incrementedArray);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <Image source={{ uri: `https://picsum.photos/id/${item}/500/400` }} style={{ width: '100%', height: 400 }} />
    );
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
        ListFooterComponent={
          <View style={styles.footer}>
            <ActivityIndicator size={25} color="#5856D6" />
          </View>
        }
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
  footer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
