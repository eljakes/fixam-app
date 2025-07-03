// screens/BookingScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BookingScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { artisan } = route.params;

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleConfirmBooking = () => {
    navigation.navigate('BookingConfirmation', {
      artisan,
      bookingDetails: {
        date,
        time,
        message,
      },
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.06 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView contentContainerStyle={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#D84315" />
              </TouchableOpacity>
              <Text style={styles.title}>Book {artisan?.name}</Text>
              <View style={{ width: 24 }} />
            </View>

            {/* Form */}
            <View style={styles.card}>
              <Text style={styles.label}>Date</Text>
              <TextInput
                placeholder="e.g., 2025-07-15"
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholderTextColor="#999"
              />

              <Text style={styles.label}>Time</Text>
              <TextInput
                placeholder="e.g., 14:30"
                style={styles.input}
                value={time}
                onChangeText={setTime}
                placeholderTextColor="#999"
              />

              <Text style={styles.label}>Message / Request Details</Text>
              <TextInput
                placeholder="Brief description of your job..."
                style={[styles.input, styles.textArea]}
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                placeholderTextColor="#999"
              />

              <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
                <Text style={styles.buttonText}>Confirm Booking</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginTop: 16,
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#D84315',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});