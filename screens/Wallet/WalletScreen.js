import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  ImageBackground,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function WalletScreen() {
  const navigation = useNavigation();

  const handleBack = () => navigation.goBack();
  const handleDeposit = () => navigation.navigate('Deposit');
  const handleWithdraw = () => navigation.navigate('Withdraw');
  const handleMakePayment = () => navigation.navigate('MakePayment');
  const handleLinkAccount = () => navigation.navigate('LinkAccount');

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.4 }} // ← Darker, richer subtle background
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBack}>
              <Ionicons name="arrow-back" size={26} color="#333" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>My Wallet</Text>
            <View style={{ width: 26 }} />
          </View>

          {/* Balance Section */}
          <View style={styles.balanceCard}>
            <Text style={styles.balanceLabel}>Total Balance</Text>
            <Text style={styles.balanceAmount}>GH₵ 1,250.00</Text>
            <View style={styles.balanceActions}>
              <TouchableOpacity style={styles.balanceAction} onPress={handleDeposit}>
                <MaterialIcons name="arrow-downward" size={22} color="#D84315" />
                <Text style={styles.actionLabel}>Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.balanceAction} onPress={handleWithdraw}>
                <MaterialIcons name="arrow-upward" size={22} color="#D84315" />
                <Text style={styles.actionLabel}>Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.quickActionCard} onPress={handleMakePayment}>
              <Ionicons name="card" size={28} color="#D84315" />
              <Text style={styles.quickLabel}>Make Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionCard} onPress={handleLinkAccount}>
              <Ionicons name="link" size={28} color="#D84315" />
              <Text style={styles.quickLabel}>Link Account</Text>
            </TouchableOpacity>
          </View>

          {/* Recent Transactions */}
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>+ GH₵ 200.00 - Deposit via MoMo</Text>
            <Text style={styles.transactionDate}>June 30, 2025</Text>
          </View>
          <View style={styles.transactionCard}>
            <Text style={styles.transactionText}>- GH₵ 50.00 - Withdrawal to Card</Text>
            <Text style={styles.transactionDate}>June 28, 2025</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    padding: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'android' ? 40 : 0,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
  },
  balanceCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
  },
  balanceLabel: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D84315',
    marginBottom: 20,
  },
  balanceActions: {
    flexDirection: 'row',
    gap: 30,
  },
  balanceAction: {
    alignItems: 'center',
  },
  actionLabel: {
    marginTop: 6,
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    gap: 16,
  },
  quickActionCard: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 24,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  quickLabel: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#444',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  transactionText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#444',
  },
  transactionDate: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
});