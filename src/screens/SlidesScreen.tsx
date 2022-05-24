import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { slides, Slide } from '../data/slides';

const { width: screenWidth } = Dimensions.get('window');

interface RenderItemProps {
  item: Slide;
}

export const SlidesScreen = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.slideImage} source={item.img} />
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.slideSubtitle}>{item.desc}</Text>
      </View>
    );
  };

  const handleSnapToItem = (activeSlideIndex: number) => setActiveSlide(activeSlideIndex);

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={slides}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={handleSnapToItem}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: '#5056D6',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  slide: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  slideImage: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  slideTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  slideSubtitle: {
    fontSize: 16,
  },
});
