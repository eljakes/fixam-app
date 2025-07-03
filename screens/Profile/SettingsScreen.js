// screens/SettingsScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleLogout = () => {
    Alert.alert('Logout', 'You have been logged out.');
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.07 }}
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#D84315" />
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Settings Options */}
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <Text style={styles.label}>Push Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              thumbColor={notificationsEnabled ? '#D84315' : '#f4f3f4'}
              trackColor={{ true: '#FFCCBC', false: '#ccc' }}
            />
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.label}>Dark Mode</Text>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              thumbColor={darkModeEnabled ? '#D84315' : '#f4f3f4'}
              trackColor={{ true: '#FFCCBC', false: '#ccc' }}
            />
          </View>

          <View style={styles.settingRow}>
            <Text style={styles.label}>App Version</Text>
            <Text style={styles.version}>v1.0.0</Text>
          </View>
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 20,
    elevation: 3,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  version: {
    fontSize: 16,
    color: '#888',
    fontWeight: '500',
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: '#D84315',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});