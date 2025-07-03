import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function MakePaymentScreen({ navigation }) {
  const [method, setMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');

  const handlePayment = () => {
    if (!method || !amount) {
      Alert.alert('Missing Info', 'Please fill all required fields.');
      return;
    }
    Alert.alert('Payment Initiated', `Paying ₵${amount} via ${method}`);
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.07 }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#D84315" />
          </TouchableOpacity>
          <Text style={styles.title}>Make Payment</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.card}>
          {/* Method Picker */}
          <Text style={styles.label}>Select Payment Method</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={method}
              onValueChange={(value) => setMethod(value)}
              style={Platform.OS === 'ios' ? styles.pickerIOS : styles.picker}
            >
              <Picker.Item label="-- Choose Method --" value="" />
              <Picker.Item label="Wallet Balance" value="wallet" />
              <Picker.Item label="Mobile Money" value="momo" />
              <Picker.Item label="Card" value="card" />
              <Picker.Item label="Bank Account" value="bank" />
            </Picker>
          </View>

          {/* Amount */}
          <Text style={styles.label}>Amount (₵)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter amount"
            value={amount}
            onChangeText={setAmount}
          />

          {/* Optional Reference */}
          <Text style={styles.label}>Reference (optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Plumbing job for 3-bed house"
            value={reference}
            onChangeText={setReference}
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
            <Text style={styles.payText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: 60,
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
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    marginTop: 16,
    marginBottom: 6,
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    overflow: 'hidden',
  },
  picker: {
    height: 48,
    width: '100%',
  },
  pickerIOS: {
    height: 120,
    width: '100%',
  },
  input: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  payButton: {
    backgroundColor: '#D84315',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});