import * as React from 'react';

import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Brand } from 'rn-ui-vietnam';

export default function App() {
  const _renderItem = () => {
    return (
      <TouchableOpacity
        style={{
          width: 70,
          height: 70,
          backgroundColor: '#00f',
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Brand renderItem={_renderItem} separate={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f00'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
