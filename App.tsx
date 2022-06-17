/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.text}>Fui clicado {count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={[styles.text, { color: 'white' }]}>Botão massa</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123518',
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  }
});

export default App;
