import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const transactions = [
  { id: '1', title: 'Deposit via MoMo', amount: '+₵100', date: 'Jun 26', type: 'credit' },
  { id: '2', title: 'Job Payment', amount: '-₵40', date: 'Jun 25', type: 'debit' },
  { id: '3', title: 'Withdrawal to Bank', amount: '-₵30', date: 'Jun 24', type: 'debit' },
];

export default function WalletScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Back + Home Buttons */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        <Ionicons name="home" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>My Wallet</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Current Balance</Text>
        <Text style={styles.balanceAmount}>₵250.00</Text>
      </View>

      {/* Wallet Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Deposit')}>
          <Ionicons name="add-circle" size={24} color="#fff" />
          <Text style={styles.actionText}>Deposit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('Withdraw')}>
          <Ionicons name="arrow-down-circle" size={24} color="#fff" />
          <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('LinkAccount')}>
          <Ionicons name="link" size={24} color="#fff" />
          <Text style={styles.actionText}>Link Account</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.paymentBtn} onPress={() => navigation.navigate('MakePayment')}>
        <Ionicons name="cash-outline" size={22} color="#fff" />
        <Text style={styles.paymentText}>Make Payment</Text>
      </TouchableOpacity>

      {/* Recent Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transaction}>
            <MaterialIcons
              name={item.type === 'credit' ? 'arrow-downward' : 'arrow-upward'}
              size={20}
              color={item.type === 'credit' ? 'green' : 'red'}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.txTitle}>{item.title}</Text>
              <Text style={styles.txDate}>{item.date}</Text>
            </View>
            <Text style={[styles.txAmount, { color: item.type === 'credit' ? 'green' : 'red' }]}>
              {item.amount}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 20,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
  },
  homeButton: {
    position: 'absolute',
    top: 50,
    right: 16,
    zIndex: 10,
  },
  balanceCard: {
    backgroundColor: '#D84315',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 16,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 6,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionBtn: {
    backgroundColor: '#D84315',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
    width: '31%',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 6,
    textAlign: 'center',
  },
  paymentBtn: {
    flexDirection: 'row',
    backgroundColor: '#BF360C',
    borderRadius: 10,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  paymentText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 1,
  },
  txTitle: {
    fontSize: 16,
    color: '#333',
  },
  txDate: {
    fontSize: 12,
    color: '#888',
  },
  txAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});