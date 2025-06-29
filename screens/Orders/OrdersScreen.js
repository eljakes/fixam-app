// screens/Orders/OrdersScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const dummyOrders = [
  { id: '1', title: 'Plumbing Repair', date: 'June 27', status: 'Ongoing' },
  { id: '2', title: 'AC Installation', date: 'June 25', status: 'Completed' },
  { id: '3', title: 'Wall Painting', date: 'June 22', status: 'Ongoing' },
  { id: '4', title: 'Ceiling Fan Fix', date: 'June 20', status: 'Completed' },
];

export default function OrdersScreen() {
  const [filter, setFilter] = useState('Ongoing');

  const filteredOrders = dummyOrders.filter((item) => item.status === filter);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Requests</Text>

      <View style={styles.tabs}>
        {['Ongoing', 'Completed'].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.tab,
              filter === status && styles.activeTab,
            ]}
            onPress={() => setFilter(status)}
          >
            <Text
              style={[
                styles.tabText,
                filter === status && styles.activeTabText,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <MaterialIcons name="work" size={24} color="#D84315" />
            <View style={{ marginLeft: 12, flex: 1 }}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text style={styles.jobDate}>{item.date}</Text>
            </View>
            <Text style={styles.status}>{item.status}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF3E0', padding: 16 },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D84315',
    textAlign: 'center',
    marginBottom: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#FFE0B2',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  activeTab: {
    backgroundColor: '#D84315',
  },
  tabText: {
    fontSize: 14,
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  jobDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D84315',
  },
});