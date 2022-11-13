import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  findNodeHandle,
  Animated,
} from 'react-native';

export type IProp = {
  range: number;
  value: number;
  containerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  trackeActive?: StyleProp<{ backgroundColor: string }>;
  trackeStyle?: StyleProp<ViewStyle>;
  track?: boolean;
};

export default function Slider(props: IProp) {
  let refRoot = React.useRef<View | null>().current;
  let refContainer = React.useRef<View | null>().current;
  let refTracker = React.useRef<View | null>().current;
  let _translateX = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    setTimeout(() => {
      if (!refRoot) return;
      refTracker?.measureLayout(
        findNodeHandle(refRoot) as number,
        (_, __, trackerWidth, ___) => {
          if (!refRoot) return;
          refContainer?.measureLayout(
            findNodeHandle(refRoot) as number,
            (_, __, width, ___) => {
              Animated.timing(_translateX, {
                toValue: (props.value * width) / props.range - trackerWidth / 2,
                duration: 0,
                useNativeDriver: true,
              }).start();
            },
            () => {}
          );
        },
        () => {}
      );
    }, 500);
  });

  return React.createElement(
    View,
    {
      ref: (_ref) => (refRoot = _ref),
      style: [styles.root],
    },
    [
      React.createElement(
        View,
        {
          ref: (_ref) => (refContainer = _ref),
          style: [styles.container, props.containerStyle],
        },
        Array.from(
          {
            length: props.range,
          },
          (_, k) => k + 1
        ).map((item) =>
          React.createElement(View, {
            style: [
              styles.children,
              item === props?.value &&
                !props.track &&
                (styles.highlight || props.trackeActive),
              props.itemStyle,
            ],
          })
        )
      ),
      props?.track &&
        React.createElement(Animated.View, {
          ref: (_ref: View | null | undefined) => (refTracker = _ref),
          style: [
            styles.tracker,
            styles.highlight,
            {
              transform: [
                {
                  translateX: _translateX,
                },
              ],
            },
            props.trackeActive,
            props.trackeStyle,
          ],
        }),
    ]
  );
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    height: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  children: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#ccc',
    justifyContent: 'center',
  },
  highlight: {
    backgroundColor: '#aa00ff',
  },
  tracker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 1000,
  },
});

Slider.defaultProps = {
  range: 10,
  value: 0,
};
