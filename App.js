//import { StatusBar } from 'expo-status-bar';
import {React,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Home, Calculator, WebSite, Article} from './src/screens'



export default function App() {

  const [{status},SetStatus]=useState("0")
  
  let screen = <Home></Home>

  switch (status)
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
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
