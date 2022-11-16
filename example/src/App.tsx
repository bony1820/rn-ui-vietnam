import * as React from 'react';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { TabView } from 'rn-ui-vietnam';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TabView tabNames={['TabOne', 'TabTwo']} tabStyle={{ color: '#333' }}>
          <View style={{ flex: 1, backgroundColor: '#ccc' }} />
          <View style={{ flex: 1, backgroundColor: '#666' }} />
        </TabView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
