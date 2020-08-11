import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FootBar} from '../elements/FootBar';

export const Home = props =>  {
  return (
    <View style={styles.container}>
    <FootBar></FootBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
