import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Games from '../games/games.js';

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1d1c1c',
    textAlign: 'center',
    height: 2000,
  }});

export default Main