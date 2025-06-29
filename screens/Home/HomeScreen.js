import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Feature({ icon, label }) {
  const navigation = useNavigation();

  const handlePress = () => {
    switch (label) {
      case 'Browse Jobs':
        navigation.navigate('JobDetails');
        break;
      case 'Chat':
        navigation.navigate('Chat');
        break;
      case 'Wallet':
        navigation.navigate('Wallet');
        break;
      case 'Profile':
        navigation.navigate('Profile');
        break;
      case 'Settings':
        navigation.navigate('Settings');
        break;
      case 'Store':
        navigation.navigate('Store');
        break;
      case 'My Orders':
        navigation.navigate('BookingHistory');
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Ionicons name={icon} size={28} color="#D84315" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const features = [
    { icon: 'briefcase', label: 'Browse Jobs' },
    { icon: 'chatbubbles', label: 'Chat' },
    { icon: 'wallet', label: 'Wallet' },
    { icon: 'person', label: 'Profile' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'storefront', label: 'Store' },
    { icon: 'list', label: 'My Orders' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to FixAm</Text>
      <View style={styles.grid}>
        {features.map((feature) => (
          <Feature key={feature.label} icon={feature.icon} label={feature.label} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 30,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    width: '47%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    elevation: 3,
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
});