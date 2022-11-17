import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
  ViewToken,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export type IData = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export type IProps = {
  renderItem: () => ListRenderItem<unknown>;
  data: object[];
  backIcon: JSX.Element;
  nextIcon: JSX.Element;
  separate: number;
};
export default function Brand(props: IProps) {
  let refFlatlist = React.useRef<FlatList | null>().current;
  let refData = React.useRef<IData>().current;
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  const renderItem: ListRenderItem<unknown> =
    props.renderItem as unknown as ListRenderItem<unknown>;
  const data: object[] = props.data;
  // const separate = props.separate as number;
  const onViewableItemsChanged = React.useCallback(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (_data) => (refData = _data),
    []
  );
  return React.createElement(
    View,
    { style: [styles.root] },
    React.createElement(
      TouchableOpacity,
      {
        onPress: () => {
          refFlatlist?.scrollToIndex({
            index: (refData?.viewableItems[0]?.index || 1) - 1,
            animated: true,
          });
        },
      },
      props.backIcon || React.createElement(Text, { style: [styles.icon] }, '<')
    ),
    React.createElement(
      View,
      {
        style: [styles.container],
      },
      React.createElement(FlatList, {
        ref: (_ref) => (refFlatlist = _ref),
        style: styles.flatlist,
        renderItem: renderItem,
        data: data,
        horizontal: true,
        // ItemSeparatorComponent: React.createElement(View, {
        //   style: {
        //     width: separate,
        //     backgroundColor: '#fff',
        //   },
        // }) as unknown as ComponentType<any>,
        showsHorizontalScrollIndicator: false,
        keyboardShouldPersistTaps: 'always',
        onViewableItemsChanged: onViewableItemsChanged,
        viewabilityConfig: viewConfigRef.current,
      }),
      React.createElement(LinearGradient, {
        style: styles.left,
        colors: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.2)'],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
      }),
      React.createElement(LinearGradient, {
        style: styles.right,
        colors: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.2)'],
        end: { x: 0, y: 0 },
        start: { x: 1, y: 0 },
      })
    ),
    React.createElement(
      TouchableOpacity,
      {
        onPress: () => {
          refFlatlist?.scrollToIndex({
            index: (refData?.viewableItems[0]?.index || 0) + 1,
            animated: true,
          });
        },
      },
      props.nextIcon || React.createElement(Text, { style: [styles.icon] }, '>')
    )
  );
}

const styles = StyleSheet.create({
  root: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    flex: 1,
    marginHorizontal: 10,
  },
  flatlist: {},
  left: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 50,
  },
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 50,
  },
  icon: {
    fontSize: 20,
    textAlign: 'center',
  },
});

Brand.defaultProps = {
  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  renderItem: () => <Text>abc</Text>,
  backIcon: null,
  nextIcon: null,
  separate: 5,
};
