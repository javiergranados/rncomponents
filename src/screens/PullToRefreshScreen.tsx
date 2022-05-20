import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const [data, setData] = useState<string>('');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setData('Hello World!');
    }, 1500);
  };
  return (
    <ScrollView
      style={{ marginTop: isRefreshing ? top : 0 }}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          progressBackgroundColor="#5856D6"
          colors={['white']}
          // style={{ backgroundColor: '#5856D6' }}
          // tintColor="white"
          tintColor="#5856D6"
          title="Refreshing"
          titleColor="white"
        />
      }
    >
      <View style={styles.container}>
        <HeaderTitle title="Pull to refresh" />
        {!!data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
