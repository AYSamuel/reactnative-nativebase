import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Cityinfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>Leipzig, Germany</Text>
      <Text style={styles.weather}>Sunny</Text>
      <Text style={styles.degrees}>21°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
  },
  city: {
    fontSize: 40,
    paddingBottom: 15,
    fontWeight: 900,
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'monospace',
    color: '#9A208C',
  },
  weather: {
    fontSize: 35,
    paddingBottom: 10,
    fontFamily: Platform.OS === 'ios' ? 'Roboto' : 'monospace',
    color: '#9A208C',
  },
  degrees: {
    fontSize: 35,
    color: '#9A208C',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'candara',
    paddingBottom: 20,
  },
});
