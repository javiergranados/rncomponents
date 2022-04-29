import React, { useRef, useState } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';

export const Animation102Screen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
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
    Animated.timing(opacity, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setDisabled(false);
      setVisible(false);
    });
  };

  const handleClick = () => {
    setDisabled(true);
    if (visible) {
      fadeOut();
    } else {
      fadeIn();
    }
  };

  const title: string = disabled ? 'Animating...' : visible ? 'Fade Out' : 'Fade In';

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, marginBottom: 20, opacity: opacity }} />
      <Button title={title} onPress={handleClick} disabled={disabled} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
