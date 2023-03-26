import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Search(props) {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        autoFocus={false}
        placeholder={props.placeholder}
        placeholderTextColor='grey'
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEAEA',
    //borderRadius: 13,
  },
  textInput: {
    padding: 5,
    color: '#9A208C',
    borderColor: '#9A208C',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 13,
    width: 300,
  },
});
