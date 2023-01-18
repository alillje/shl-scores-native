import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Games = () => {
  return (
    <View style={styles.gamesContainer}>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  gamesContainer: {
    backgroundColor: '#1d1c1c',
    textAlign: 'center',
    height: 2000,
  }});

export default Games