import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function BoostPaymentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { amount } = route.params || {};

  const [selectedMethod, setSelectedMethod] = useState(null);

  const handlePayment = () => {
    if (!selectedMethod) {
      Alert.alert('Select Payment Method', 'Please choose a payment method first.');
      return;
    }

    // TODO: Replace with real integration (Hubtel, Paystack, etc.)
    Alert.alert(
      'Payment Successful',
      `Your post has been boosted using ${selectedMethod.toUpperCase()}.`,
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <View style={styles.container}>
      {/* Back */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>Complete Payment</Text>
      <Text style={styles.amount}>GH₵{amount?.toFixed(2)}</Text>

      <Text style={styles.subtitle}>Choose Payment Method</Text>

      {/* Mobile Money Option */}
      <TouchableOpacity
        style={[
          styles.methodCard,
          selectedMethod === 'momo' && styles.selectedCard,
        ]}
        onPress={() => setSelectedMethod('momo')}
      >
        <MaterialIcons name="phone-android" size={24} color="#D84315" />
        <Text style={styles.methodText}>Mobile Money</Text>
        {selectedMethod === 'momo' && (
          <Ionicons name="checkmark-circle" size={20} color="#D84315" />
        )}
      </TouchableOpacity>

      {/* Card Option */}
      <TouchableOpacity
        style={[
          styles.methodCard,
          selectedMethod === 'card' && styles.selectedCard,
        ]}
        onPress={() => setSelectedMethod('card')}
      >
        <Ionicons name="card-outline" size={24} color="#D84315" />
        <Text style={styles.methodText}>Debit/Credit Card</Text>
        {selectedMethod === 'card' && (
          <Ionicons name="checkmark-circle" size={20} color="#D84315" />
        )}
      </TouchableOpacity>

      {/* Pay Button */}
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
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 16,
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginTop: 60,
    marginBottom: 10,
    textAlign: 'center',
  },
  amount: {
    fontSize: 24,
    color: '#D84315',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  methodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginBottom: 14,
    justifyContent: 'space-between',
    elevation: 2,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#D84315',
  },
  methodText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    flex: 1,
    color: '#333',
  },
  payButton: {
    marginTop: 40,
    backgroundColor: '#D84315',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});