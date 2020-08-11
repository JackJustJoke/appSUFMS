import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FootBar} from '../elements/FootBar';

export const Calculator = props =>  {
  return (
    <View style={styles.container}>
      <FootBar></FootBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
