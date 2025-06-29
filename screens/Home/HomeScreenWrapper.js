import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreenWrapper() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkRole = async () => {
      const role = await AsyncStorage.getItem('userRole');

      if (role === 'client') {
        navigation.replace('ClientDashboard');
      } else if (role === 'artisan') {
        navigation.replace('ArtisanDashboard');
      } else {
        navigation.replace('RoleSelection');
      }
    };

    checkRole();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#D84315" />
    </View>
  );
}