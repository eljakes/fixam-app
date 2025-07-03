import React, { useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  StyleSheet,
  Text,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Feature from '../../components/Feature';

export default function ClientDashboardScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const features = [
    {
      icon: 'briefcase',
      label: 'Browse Jobs',
      screen: { tab: 'Home', target: 'BrowseJobs' },
    },
    {
      icon: 'list',
      label: 'My Orders',
      screen: 'BookingHistory',
    },
    {
      icon: 'wallet',
      label: 'Wallet',
      screen: 'Wallet',
    },
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
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.2 }} // 👈 Darker overlay
    >
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.grid}>
          {features.map((item) => (
            <Feature
              key={item.label}
              icon={item.icon}
              label={item.label}
              onPress={() => {
                if (typeof item.screen === 'string') {
                  navigation.navigate(item.screen);
                } else {
                  navigation.navigate(item.screen.tab, {
                    screen: item.screen.target,
                  });
                }
              }}
            />
          ))}
        </ScrollView>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate('PostJob')}
          >
            <Text style={styles.buttonText}>+ Post Job</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
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