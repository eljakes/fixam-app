import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DepositScreen() {
  const navigation = useNavigation();
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('MoMo');

  const handleDeposit = () => {
    if (!amount) return Alert.alert('Enter amount to deposit');
    Alert.alert('Deposit Initiated', `₵${amount} via ${method}`);
    // Future: trigger payment gateway logic here
    setAmount('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>Deposit Funds</Text>

      <Text style={styles.label}>Enter Amount (GHS)</Text>
      <TextInput
        style={styles.input}
        placeholder="₵100"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Select Payment Method</Text>
      <View style={styles.methods}>
        {['MoMo', 'Card', 'Bank'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.methodButton,
              method === option && styles.selectedMethod,
            ]}
            onPress={() => setMethod(option)}
          >
            <MaterialCommunityIcons
              name={
                option === 'MoMo'
                  ? 'cellphone'
                  : option === 'Card'
                  ? 'credit-card'
                  : 'bank'
              }
              size={24}
              color={method === option ? '#fff' : '#D84315'}
            />
            <Text
              style={[
                styles.methodLabel,
                method === option && { color: '#fff' },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.depositBtn} onPress={handleDeposit}>
        <Text style={styles.depositText}>Deposit Now</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginTop: 80,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#444',
    marginBottom: 6,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  methodButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D84315',
  },
  selectedMethod: {
    backgroundColor: '#D84315',
  },
  methodLabel: {
    marginTop: 6,
    color: '#D84315',
    fontWeight: '600',
  },
  depositBtn: {
    marginTop: 40,
    backgroundColor: '#D84315',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  depositText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});