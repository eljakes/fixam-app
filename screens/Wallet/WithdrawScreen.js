import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function WithdrawScreen() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const handleWithdraw = () => {
    if (!amount || !method || !accountNumber) {
      Alert.alert('Missing Fields', 'Please fill in all fields to proceed.');
      return;
    }
    Alert.alert('Success', `₵${amount} will be withdrawn via ${method}.`);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>Withdraw Funds</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount (₵)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Withdrawal Method</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={method}
          onValueChange={(itemValue) => setMethod(itemValue)}
        >
          <Picker.Item label="-- Select Method --" value="" />
          <Picker.Item label="Mobile Money" value="MoMo" />
          <Picker.Item label="Card" value="Card" />
          <Picker.Item label="Bank Transfer" value="Bank" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Account / Wallet Number"
        keyboardType="number-pad"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />

      <TouchableOpacity style={styles.withdrawButton} onPress={handleWithdraw}>
        <Text style={styles.withdrawText}>Withdraw Now</Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <Ionicons name="home" size={24} color="#D84315" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  withdrawButton: {
    backgroundColor: '#D84315',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  withdrawText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 4,
  },
});