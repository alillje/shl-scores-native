import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  const logo = require('./img/shl-scores-logo.png')
  return (
    <View style={styles.headerContainer}>
      <Image source={logo} style={styles.headerLogo} />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    padding: 15,
    backgroundColor: '#181717',
    textAlign: 'center',
    borderBottomColor: '#777777',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  headerLogo: {
    width: 400,
    height: 80,
  }
});

export default Header