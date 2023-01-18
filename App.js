import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import Games from './components/games/games.js';
import { useState, useEffect } from 'react';



export default function App() {
  // useEffect(() => {
  //   const test = async () => {
  //     try {
  //     const response = await fetch('http://192.168.0.25:9000/api/v1')
  //     const json = await response.json();
  //     return json
  //     } catch (e) {
  //       console.log('test' + e.code)    
  //   }
  //   }
  //   console.log('HEJ' + test())
  // }, [])
  return (
    <View style={styles.mainContainer}>
      <Header style={styles.headerContainer} />
      {/* <Main style={styles.mainContentContainer} /> */}
      <Games />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1d1c1c',
    paddingTop: 0
  },
  headerContainer: {
    height: 120,
    flex: 1
  },
  mainContentContainer: {
    flex: 2
  }
});
