import {React,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Home} from './src/screens/Home';
import {Calculator} from './src/screens/Calculator';
import {WebSite} from './src/screens/WebSite';
import {Article} from './src/screens/Article';
import Main from './src/screens/MainScreen';

export default function App() {
 
  let screen = <Home></Home>;

  switch (Main.GetStatus())
  {
  case "0": 
   screen = <Home></Home>
   case "1":
   screen = <Calculator></Calculator>
   case "2": 
   screen = <WebSite></WebSite>
   case "3":
   screen = <Article></Article>
  default:
   screen = <Home></Home>
  } 
  
  return (

    <View style={styles.container}>
    {screen} 
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
});
