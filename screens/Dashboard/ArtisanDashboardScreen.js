import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Feature from '../../components/Feature';

export default function ArtisanDashboardScreen() {
  const navigation = useNavigation();

  const features = [
    { icon: 'briefcase', label: 'Browse Jobs', screen: 'JobDetails' },
    { icon: 'wallet', label: 'Wallet', screen: 'Wallet' },
    { icon: 'list', label: 'My Orders', screen: 'BookingHistory' },
  ];

  const handleBack = () => navigation.navigate('RoleSelection');

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }} // ← Darker, richer background
    >
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
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
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
});