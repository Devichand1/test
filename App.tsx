/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {GameView} from './src/Game';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GameView />
    </SafeAreaView>
  );
}

export default App;
