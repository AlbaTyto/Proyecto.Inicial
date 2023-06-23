import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './AppStyles';

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


