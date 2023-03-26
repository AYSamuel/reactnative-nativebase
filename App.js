import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from 'react-native';
import Search from './components/Searchcity';
import Cityinfo from './components/Cityinfo';

const image = require('./assets/steven-weeks-74Km27oJZpI-unsplash.jpg');

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={'height'}>
      <ImageBackground
        source={image}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {/* <TouchableWithoutFeedback
          onPress={Platform.OS !== 'windows' ? Keyboard.dismiss : undefined}> */}
          <View style={styles.vcontainer}>
            <Cityinfo />
            <Search placeholder='Search any City' />
            <StatusBar style='auto' />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  vcontainer: {
    flex: 1,
    backgroundColor: '#FFEAEA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
