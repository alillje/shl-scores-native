import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MenuButton from '../menu-button/menu-button.js'

const Menu = () => {
  return (
    <View style={styles.menuContainer}>
        <MenuButton title='Games' />
        <MenuButton title='Standings' />
        <MenuButton title='Upcoming' />
        <MenuButton title='Results' />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    verticalAlign: 'middle'
  },
  text: {
    color: '#fff',
    alignSelf: 'center'
  }
});

export default Menu