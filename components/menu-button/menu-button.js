import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const MenuButton = ({ title }) => {
    const navigation = useNavigation();

  return (
    <Button title={title} onPress={(() => navigation.navigate(title))} style={styles.menuButtonContainer}>
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />

    </Button>
  );
}

const styles = StyleSheet.create({
    menuButtonContainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    verticalAlign: 'middle'
  },
  text: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20
  }
});

export default MenuButton