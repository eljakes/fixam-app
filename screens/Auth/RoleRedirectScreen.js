import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function RoleRedirectScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkRole = async () => {
      try {
        const role = await AsyncStorage.getItem('userRole');

        if (role === 'client' || role === 'artisan') {
          navigation.reset({
            index: 0,
            routes: [{ name: 'MainTabs' }],
          });
        } else {
          navigation.navigate('RoleSelection');
        }
      } catch (err) {
        console.error('Error reading role from storage:', err);
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