import React, { useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  StyleSheet,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Feature from '../../components/Feature';

export default function ClientDashboardScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const features = [
    { icon: 'briefcase', label: 'Browse Jobs', screen: 'JobDetails' },
    { icon: 'chatbubbles', label: 'Chat', screen: 'ChatList' },
    { icon: 'wallet', label: 'Wallet', screen: 'Wallet' },
    { icon: 'person', label: 'Profile', screen: 'Profile' },
    { icon: 'list', label: 'My Orders', screen: 'BookingHistory' },
    { icon: 'storefront', label: 'Store', screen: 'Store' },
    { icon: 'settings', label: 'Settings', screen: 'Settings' },
  ];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleBack = () => navigation.navigate('RoleSelection');

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      {/* Feature Cards */}
      <ScrollView contentContainerStyle={styles.grid}>
        {features.map((item) => (
          <Feature
            key={item.label}
            icon={item.icon}
            label={item.label}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </ScrollView>

      {/* Post Job + Sell Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('PostJob')}
        >
          <Text style={styles.buttonText}>+ Post Job</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('PostItem')}
        >
          <Text style={styles.buttonText}>+ Sell</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
  },
  grid: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 120,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  buttonRow: {
    position: 'absolute',
    bottom: 24,
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 16,
  },
  actionButton: {
    backgroundColor: '#D84315',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 30,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});