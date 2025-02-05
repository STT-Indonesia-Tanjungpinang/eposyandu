import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const LARGE_IMAGE_WIDTH = width * 0.5;
const MEDIUM_IMAGE_WIDTH = LARGE_IMAGE_WIDTH * 0.5;
const SMALL_IMAGE_WIDTH = MEDIUM_IMAGE_WIDTH * 0.5;

const ListItem = ({ path, scrollX, index, dataLength }) => {

    const inputRange = [
        (index - 2) * SMALL_IMAGE_WIDTH,
        (index - 1) * SMALL_IMAGE_WIDTH,
        index * SMALL_IMAGE_WIDTH,
        (index + 1) * SMALL_IMAGE_WIDTH,
      ];

      const isLastItem = dataLength === index + 1;
      const isSecondLastItme = dataLength === index + 2;
    
      const outputRange = isLastItem
    ? [
        SMALL_IMAGE_WIDTH,
        LARGE_IMAGE_WIDTH,
        LARGE_IMAGE_WIDTH,
        LARGE_IMAGE_WIDTH,
      ]
    : isSecondLastItme
    ? [
        SMALL_IMAGE_WIDTH,
        LARGE_IMAGE_WIDTH,
        MEDIUM_IMAGE_WIDTH,
        MEDIUM_IMAGE_WIDTH,
      ]
    : [
        SMALL_IMAGE_WIDTH,
        MEDIUM_IMAGE_WIDTH,
        LARGE_IMAGE_WIDTH,
        SMALL_IMAGE_WIDTH,
      ];

      const animatedStyle = useAnimatedStyle(() => ({
        width: interpolate(scrollX.value, inputRange, outputRange, 'clamp'),
      }));
    
    
  return <Animated.Image source={path} style={[Styles.Image , animatedStyle]} />;
};

export default ListItem;

const Styles = StyleSheet.create({
  Image: {
    width: 250,
    marginRight: 8,
    borderRadius: 20,
    height: 200,
  },
});
