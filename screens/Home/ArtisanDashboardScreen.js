import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ArtisanDashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Artisan Dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: '#D84315',
    fontWeight: 'bold',
  },
});