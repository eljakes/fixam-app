import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
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
      trigger: { seconds: 5 }, // Simulated delay for demo/testing
    });
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.07 }}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        <View style={styles.card}>
          <Text style={styles.title}>Booking Confirmed</Text>

          <Text style={styles.message}>Artisan: <Text style={styles.bold}>{artisan?.name}</Text></Text>
          <Text style={styles.message}>Date: <Text style={styles.bold}>{bookingDetails?.date}</Text></Text>
          <Text style={styles.message}>Time: <Text style={styles.bold}>{bookingDetails?.time}</Text></Text>

          <Text style={styles.note}>You'll receive a notification reminder shortly.</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 16,
    zIndex: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 26,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginVertical: 6,
    textAlign: 'center',
  },
  bold: {
    fontWeight: '600',
    color: '#BF360C',
  },
  note: {
    marginTop: 20,
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
  },
});