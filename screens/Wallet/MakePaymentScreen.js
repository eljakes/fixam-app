import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
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

    // Simulate payment action
    Alert.alert('Payment Initiated', `Paying ₵${amount} via ${method}`);
    navigation.goBack(); // Go back for now
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>Make Payment</Text>

      {/* Payment Method Dropdown */}
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

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 12,
    color: '#333',
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 12,
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
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
  },
  payButton: {
    backgroundColor: '#D84315',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});