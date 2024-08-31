import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './GameView.styles';
import useGame from './Logic.Game';
import History from '../History';

export default function GameView() {
  const styles = useStyles();
  const {ITEMS, selectSlice, matchedRow, history} = useGame();

  const renderSlice = (item, index) => {
    const filled = item !== null;
    const mySlice = item === 1;
    const filledStyle = filled
      ? mySlice
        ? styles.mySelectedSlice
        : styles.botSelectedSlice
      : {};

    const handleSelect = () => {
      selectSlice(index);
    };
    const isWinnigSlice =  matchedRow && matchedRow.includes(index);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={handleSelect}
        key={index}
        style={StyleSheet.compose(styles.slice, filledStyle)}>
        {filled && <Text style={styles.text}>{isWinnigSlice ? "-" : mySlice ? 'X' : 'O'}</Text>}
      </TouchableOpacity>
    );
  };
  return (
    <>
    <View style={styles.container}>
      <View style={styles.body}>
        {ITEMS.map((_, index) => renderSlice(_, index))}
      </View>
    </View>
    <History data={history} />
    </>
  );
}
