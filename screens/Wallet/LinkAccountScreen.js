import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';

export default function LinkAccountScreen({ navigation }) {
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleSubmit = () => {
    console.log({ accountType, accountName, accountNumber });
    navigation.goBack(); // simulate save
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.07 }}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        <Text style={styles.title}>Link Payment Account</Text>

        {/* Account Type Dropdown */}
        <Text style={styles.label}>Account Type</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={accountType}
            onValueChange={(value) => setAccountType(value)}
            style={Platform.OS === 'ios' ? styles.pickerIOS : styles.picker}
          >
            <Picker.Item label="-- Select Type --" value="" />
            <Picker.Item label="Mobile Money" value="momo" />
            <Picker.Item label="Bank Account" value="bank" />
            <Picker.Item label="Card" value="card" />
          </Picker>
        </View>

        {/* Account Name */}
        <Text style={styles.label}>Account Name</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Elvis Owusu"
          value={accountName}
          onChangeText={setAccountName}
        />

        {/* Account Number */}
        <Text style={styles.label}>Account Number</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 024xxxxxxx or card number"
          value={accountNumber}
          onChangeText={setAccountNumber}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Link Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    backgroundColor: '#fff',
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
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#D84315',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});