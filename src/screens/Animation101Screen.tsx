import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const { visible, disabled, opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

  const handleClick = () => {
    if (visible) {
      fadeOut();
    } else {
      fadeIn();
      startMovingPosition(-300);
    }
  };

  const title: string = disabled ? 'Animating...' : visible ? 'Fade Out' : 'Fade In';

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, marginBottom: 20, opacity, transform: [{ translateY: position }] }} />
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
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
