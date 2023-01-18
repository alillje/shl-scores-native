import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header/header.js'
import Main from './components/main/main.js'

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Header style={styles.headerContainer} />
      <Main style={styles.mainContentContainer} />

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
