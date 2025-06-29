import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
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

  const handleBack = () => navigation.goBack();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>Book {artisan?.name}</Text>

      <Text style={styles.label}>Date</Text>
      <TextInput
        placeholder="e.g., 2024-07-01"
        placeholderTextColor="#999"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.label}>Time</Text>
      <TextInput
        placeholder="e.g., 14:30"
        placeholderTextColor="#999"
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.label}>Message / Request Details</Text>
      <TextInput
        placeholder="Brief description of your job..."
        placeholderTextColor="#999"
        style={[styles.input, styles.textArea]}
        multiline
        numberOfLines={4}
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('BookingConfirmation', {
            artisan,
            bookingDetails: {
              date,
              time,
              message,
            },
          });
        }}
      >
        <Text style={styles.buttonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 24,
    paddingTop: 70,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
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
    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});