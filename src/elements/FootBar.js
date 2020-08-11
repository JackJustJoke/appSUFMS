import React from 'react';
import {
    View,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {Main} from '../screens/MainScreen';

export const FootBar = props =>  {
  return (
    <View style={styles.container}>
      <FlatList style={styles.line}>

            <TouchableOpacity onPress= {Main.SetStatus('0')}>
            <Image source={require('../photos/main.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress= {Main.SetStatus('1')}>
            <Image source={require('../photos/calc.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress= {Main.SetStatus('2')}>
            <Image source={require('../photos/web.png')}/>
            </TouchableOpacity>

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
  },
});
