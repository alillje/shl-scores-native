import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header.js'
import Main from './components/main/main.js'
import Menu from './components/menu/menu.js'
import Games from './components/games/games.js';
import Standings from './components/standings/standings.js';

import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const navigationRef = React.createRef();




export default function App() {
  const options = {
    headerShown: false, 
    animation: 'fade_from_bottom' 
  }

  return (
    <View style={styles.mainContainer}>
    <Header style={styles.headerContainer} />
    <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen
          name="Games"
          component={Games}
          options={options}

        />
                <Stack.Screen
          name="Standings"
          component={Standings}
          options={options}
        />
      {/* <Main style={styles.mainContentContainer} /> */}
      {/* <Games /> */}

    </Stack.Navigator>
    <Menu />

    </NavigationContainer>

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
