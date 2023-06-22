import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.head} >Gustavo Peretti</Text>
      <Image 
      style={styles.pic} source={require('./assets/IMG_20230314_151421030.jpg')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    color: '#b8b8b8',
    fontStyle: 'italic',
  },
  pic: {
    width: '30%',
    height: '15%',
  }
});
