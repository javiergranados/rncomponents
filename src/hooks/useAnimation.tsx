import { useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    setDisabled(true);

    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setDisabled(false);
      setVisible(true);
    });
  };

  const fadeOut = () => {
    setDisabled(true);

    Animated.timing(opacity, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setDisabled(false);
      setVisible(false);
    });
  };

  const startMovingPosition = (initialPosition: number, duration: number = 1000) => {
    position.setValue(initialPosition);

    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return { visible, disabled, opacity, position, fadeIn, fadeOut, startMovingPosition };
};
