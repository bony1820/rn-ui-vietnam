import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Slider } from 'react-native-collection-ui';

export default function App() {
  return (
    <View style={styles.container}>
      <Slider
        range={5}
        value={3}
        containerStyle={{ borderRadius: 100 }}
        track
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
