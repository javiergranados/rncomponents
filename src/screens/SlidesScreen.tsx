import React, { useContext, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';
import { slides, Slide } from '../data/slides';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context';

const { width: screenWidth } = Dimensions.get('window');

type RenderItemProps = {
  item: Slide;
};

type SlidesScreenProps = StackNavigationProp<RootStackParamList, 'SlidesScreen'>;

export const SlidesScreen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const { opacity, fadeIn } = useAnimation();
  const navigation = useNavigation<SlidesScreenProps>();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.slideImage} source={item.img} />
        <Text style={{ ...styles.slideTitle, color: colors.primary }}>{item.title}</Text>
        <Text style={{ ...styles.slideSubtitle, color: colors.text }}>{item.desc}</Text>
      </View>
    );
  };

  const handleSnapToItem = (activeSlideIndex: number) => {
    setActiveSlide(activeSlideIndex);
    if (activeSlideIndex === slides.length - 1) {
      setIsButtonDisabled(false);
      fadeIn(250);
    }
  };

  const handleOnPress = () => {
    navigation.popToTop();
  };

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
      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={slides.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            style={{ ...styles.buttonContainer, backgroundColor: colors.primary }}
            activeOpacity={0.9}
            onPress={handleOnPress}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonText}>Enter</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
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
  },
  slideSubtitle: {
    fontSize: 16,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
