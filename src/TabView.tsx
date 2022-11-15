import React from 'react';
import {
  View,
  Animated,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
export default function TabView() {
  const value = React.useRef(new Animated.Value(1)).current;
  const rateWidth = 436;
  const rateHeight = 61;
  const d1 = 'M435 60V0.999985H189C219 0.999985 220 60 250 60H435Z';
  const d2 = 'M1 60V1H247C217 1 216 60 186 60H1Z';
  const showTab = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };
  const hideTab = () => {
    Animated.timing(value, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const opacityTab1 = value.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const opacityTab2 = value.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const svgView = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (rateHeight / rateWidth),
    viewBox: `0 0 ${rateWidth} ${rateHeight}`,
    fill: 'white',
  };
  return React.createElement(
    View,
    { style: [styles.container] },
    React.createElement(
      Animated.View,
      { style: [styles.tabOneContainer] },
      React.createElement(
        Animated.View,
        {
          style: {
            opacity: opacityTab1,
          },
        },
        React.createElement(
          Svg,
          {
            ...svgView,
          },
          React.createElement(Path, {
            d: d1,
            stroke: 'white',
          })
        )
      ),
      React.createElement(Animated.View, {
        style: {
          opacity: opacityTab1,
          height: 400,
          backgroundColor: '#0f0',
        },
      })
    ),
    React.createElement(
      Animated.View,
      { style: [styles.tabTwoContainer] },
      React.createElement(
        Animated.View,
        {
          style: {
            opacity: opacityTab2,
          },
        },
        React.createElement(
          Svg,
          { ...svgView },
          React.createElement(Path, {
            d: d2,
            stroke: 'white',
          })
        )
      ),
      React.createElement(Animated.View, {
        style: {
          opacity: opacityTab2,
          height: 400,
          backgroundColor: '#00f',
        },
      })
    ),
    React.createElement(
      View,
      { style: [styles.titleContainer] },
      React.createElement(
        TouchableOpacity,
        { onPress: showTab },
        React.createElement(Text, {}, 'TabOne')
      ),
      React.createElement(
        TouchableOpacity,
        { onPress: hideTab },
        React.createElement(Text, {}, 'TabTwo')
      )
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  tabOneContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 20,
  },
  tabTwoContainer: {
    zIndex: 10,
  },
  titleContainer: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1000,
  },
});

TabView.defaultProps = {};
