import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);
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
      <Animated.View
        style={{ ...styles.box, backgroundColor: colors.primary, opacity, transform: [{ translateY: position }] }}
      />
      <Button title={title} onPress={handleClick} disabled={disabled} color={colors.primary} />
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
    marginBottom: 20,
    width: 150,
    height: 150,
  },
});
