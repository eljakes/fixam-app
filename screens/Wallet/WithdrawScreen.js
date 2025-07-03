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
  ImageBackground,
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
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.07 }}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#D84315" />
          </TouchableOpacity>
          <Text style={styles.title}>Withdraw Funds</Text>
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

          <Text style={styles.label}>Account / Wallet Number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. 0551234567"
            keyboardType="number-pad"
            value={accountNumber}
            onChangeText={setAccountNumber}
          />

          <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
            <Text style={styles.buttonText}>Withdraw Now</Text>
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
  pickerWrapper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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