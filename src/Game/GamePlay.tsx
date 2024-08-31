import {View, Text} from 'react-native';
import React from 'react';
import GameView from '../components/GameView';
import History from '../components/History';
import useStyles from './Game.styles';

export default function GamePlay() {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <GameView />
    </View>
  );
}
