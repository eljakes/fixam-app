import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function BookingConfirmationScreen({ route }) {
  const { artisan, bookingDetails } = route.params || {};
  const navigation = useNavigation();

  useEffect(() => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'FixAm Reminder!',
        body: `You have a booking with ${artisan?.name} tomorrow at ${bookingDetails?.time}`,
      },
      trigger: { seconds: 5 },
    });
  }, []);

  const handleBack = () => navigation.goBack();

  const handleHome = async () => {
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

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>Booking Confirmed</Text>
      <Text style={styles.message}>Artisan: {artisan?.name}</Text>
      <Text style={styles.message}>Date: {bookingDetails?.date}</Text>
      <Text style={styles.message}>Time: {bookingDetails?.time}</Text>

      {/* Home Button */}
      <TouchableOpacity onPress={handleHome} style={styles.homeButton}>
        <Ionicons name="home" size={24} color="#D84315" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 2,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginVertical: 6,
  },
});