import {View, Text, FlatList} from 'react-native';
import React from 'react';
import useStyles from './History.styles';

export default function History({data}) {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game History</Text>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.historyItem}>
            <View style={styles.info}>
              <Text style={styles.gameNumber}>Game {index + 1}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
        keyExtractor={item => item.time}
      />
    </View>
  );
}
