// screens/BookingHistoryScreen.js
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Platform,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const bookings = [
  {
    id: '1',
    artisan: 'Kwame the Plumber',
    date: 'June 28, 2025',
    time: '10:00 AM',
    status: 'Confirmed',
  },
  {
    id: '2',
    artisan: 'Ama the Electrician',
    date: 'June 25, 2025',
    time: '3:30 PM',
    status: 'Completed',
  },
  {
    id: '3',
    artisan: 'Kojo the Painter',
    date: 'June 20, 2025',
    time: '12:00 PM',
    status: 'Cancelled',
  },
];

export default function BookingHistoryScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      delay: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.07 }}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#D84315" />
          </TouchableOpacity>
          <Text style={styles.title}>Booking History</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Animated Scroll Content */}
        <Animated.ScrollView
          style={{ opacity: fadeAnim }}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {bookings.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.artisan}>{item.artisan}</Text>
              <Text style={styles.detail}>
                {item.date} at {item.time}
              </Text>
              <Text style={[styles.status, getStatusStyle(item.status)]}>
                {item.status}
              </Text>
            </View>
          ))}
        </Animated.ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const getStatusStyle = (status) => ({
  color:
    status === 'Confirmed'
      ? '#00796B'
      : status === 'Completed'
      ? '#388E3C'
      : '#D84315',
  fontWeight: '600',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  artisan: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: '#777',
  },
  status: {
    marginTop: 8,
    fontSize: 14,
  },
});