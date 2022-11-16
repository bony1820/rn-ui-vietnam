# rn-ui-vietnam
rn-ui-vietnam
## Installation

```sh
npm install rn-ui-vietnam
```

## Usage

```js
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Slider } from 'rn-ui-vietnam';

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

```

```js
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
```

```js
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

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
