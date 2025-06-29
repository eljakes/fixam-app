import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Feature from '../../components/Feature';

export default function ArtisanDashboardScreen() {
  const navigation = useNavigation();

  const features = [
    { icon: 'briefcase', label: 'Browse Jobs', screen: 'JobDetails' },
    { icon: 'chatbubbles', label: 'Chat', screen: 'ChatList' },
    { icon: 'wallet', label: 'Wallet', screen: 'Wallet' },
    { icon: 'person', label: 'Profile', screen: 'Profile' },
    { icon: 'settings', label: 'Settings', screen: 'Settings' },
    { icon: 'storefront', label: 'Store', screen: 'Store' },
    { icon: 'list', label: 'My Orders', screen: 'BookingHistory' },
  ];

  const handleBack = () => navigation.navigate('RoleSelection');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <View style={styles.grid}>
        {features.map((feature) => (
          <Feature
            key={feature.label}
            icon={feature.icon}
            label={feature.label}
            onPress={() => navigation.navigate(feature.screen)}
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.sellButton}
        onPress={() => navigation.navigate('PostItem')}
      >
        <Text style={styles.sellText}>+ Sell</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF3E0',
    paddingTop: 60,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 40,
    gap: 16,
  },
  sellButton: {
    marginTop: 30,
    backgroundColor: '#D84315',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  sellText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});