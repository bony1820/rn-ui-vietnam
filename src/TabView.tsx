import React, { PropsWithChildren, ReactNode } from 'react';
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

interface IProp extends PropsWithChildren<any> {
  tabStyle: StyleProp<TextStyle>;
  tabNames: string[];
  children: ReactNode[];
}
export default function TabView(props: IProp) {
  const value = React.useRef(new Animated.Value(1)).current;
  const { width: widthScreen, height: heightScreen } = Dimensions.get('window');
  const rateWidth = 500;
  const rateHeight = 50;
  const d1 = 'M500 50V0H217.241C251.724 0 252.874 50 287.356 50H505Z';
  const d2 = 'M-5 50V0H282.759C248.276 0 247.126 50 212.644 50H0Z';
  const showTabOne = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };
  const showTabTwo = () => {
    Animated.timing(value, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const svgView = {
    width: widthScreen,
    height: widthScreen * (rateHeight / rateWidth),
    viewBox: `0 0 ${rateWidth} ${rateHeight}`,
    fill: 'white',
  };
  return React.createElement(
    View,
    { style: [styles.container] },
    React.createElement(
      Animated.View,
      {
        style: [
          styles.tabOneContainer,
          {
            opacity: value.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ],
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
      ),
      React.createElement(
        Animated.View,
        {
          style: {
            minHeight: heightScreen,
            position: 'absolute',
            top: 0,
            left: 0,
            width: widthScreen,
            zIndex: -1,
          },
        },
        props.children[0]
      )
    ),
    React.createElement(
      Animated.View,
      {
        style: [
          styles.tabTwoContainer,
          {
            opacity: value.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ],
      },
      React.createElement(
        Svg,
        { ...svgView },
        React.createElement(Path, {
          d: d2,
          stroke: 'white',
        })
      ),
      React.createElement(
        Animated.View,
        {
          style: {
            minHeight: heightScreen,
            position: 'absolute',
            top: 0,
            left: 0,
            width: widthScreen,
            zIndex: -1,
          },
        },
        props.children[1]
      )
    ),
    React.createElement(
      View,
      {
        style: [
          styles.titleContainer,
          { height: widthScreen * (rateHeight / rateWidth) },
        ],
      },
      React.createElement(
        TouchableOpacity,
        { onPress: showTabOne },
        React.createElement(
          Animated.Text,
          {
            style: [props.tabStyle],
          },
          props.tabNames[0]
        )
      ),
      React.createElement(
        TouchableOpacity,
        { onPress: showTabTwo },
        React.createElement(
          Animated.Text,
          {
            style: [props.tabStyle],
          },
          props.tabNames[1]
        )
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
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1000,
  },
});

TabView.defaultProps = {};
