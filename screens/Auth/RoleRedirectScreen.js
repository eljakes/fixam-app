import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function RoleRedirectScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkRole = async () => {
      const role = await AsyncStorage.getItem('userRole');

      if (role === 'client') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ClientDashboard' }],
        });
      } else if (role === 'artisan') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'ArtisanDashboard' }],
        });
      } else {
        navigation.navigate('RoleSelection');
      }
    };

    checkRole();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#D84315" />
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
});