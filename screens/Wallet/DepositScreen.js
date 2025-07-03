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
  ImageBackground,
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
    setAmount('');
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.07 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#D84315" />
          </TouchableOpacity>
          <Text style={styles.title}>Deposit Funds</Text>
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Amount (GHS)</Text>
          <TextInput
            style={styles.input}
            placeholder="₵100"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <Text style={styles.label}>Payment Method</Text>
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

          <TouchableOpacity style={styles.button} onPress={handleDeposit}>
            <Text style={styles.buttonText}>Deposit Now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#666',
    marginBottom: 6,
    fontWeight: '600',
    marginTop: 16,
  },
  input: {
    backgroundColor: '#fafafa',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  methods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  methodButton: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 14,
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
    fontWeight: '600',
    color: '#D84315',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
});