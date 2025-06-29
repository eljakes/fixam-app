import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ClientDashboardScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const notifications = [
    {
      id: '1',
      message: 'Your booking with Kwame the Plumber was confirmed.',
      date: 'Jun 28',
    },
    {
      id: '2',
      message: 'You rated David the Electrician 5 stars.',
      date: 'Jun 27',
    },
    {
      id: '3',
      message: 'Job completed successfully in Accra.',
      date: 'Jun 25',
    },
  ];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      delay: 150,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.ScrollView
      style={[styles.container, { opacity: fadeAnim }]}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.welcome}>Welcome back 👋</Text>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <TouchableOpacity
          style={styles.statCard}
          onPress={() => navigation.navigate('BookingHistory')}
        >
          <Ionicons name="briefcase" size={30} color="#D84315" />
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </TouchableOpacity>

        <View style={styles.statCard}>
          <Ionicons name="wallet" size={30} color="#D84315" />
          <Text style={styles.statNumber}>₵250</Text>
          <Text style={styles.statLabel}>Wallet</Text>
        </View>
      </View>

      {/* Notification Center */}
      <Text style={styles.sectionTitle}>Notifications</Text>
      <View style={styles.notificationsPanel}>
        {notifications.map((note) => (
          <View key={note.id} style={styles.notificationCard}>
            <Ionicons name="notifications-outline" size={20} color="#D84315" />
            <View style={{ flex: 1, marginLeft: 14 }}>
              <Text style={styles.noteText}>{note.message}</Text>
              <Text style={styles.noteDate}>{note.date}</Text>
            </View>
          </View>
        ))}
      </View>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  welcome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 28,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 24,
    borderRadius: 18,
    alignItems: 'center',
    marginRight: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  notificationsPanel: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
    marginBottom: 40,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  noteText: {
    fontSize: 15,
    color: '#333',
  },
  noteDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 6,
  },
});