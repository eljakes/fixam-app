import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function RoleSelectionScreen() {
  const navigation = useNavigation();

  const selectRole = async (role) => {
    await AsyncStorage.setItem('userRole', role);

    navigation.reset({
      index: 0,
      routes: [
        {
          name: role === 'client' ? 'ClientDashboard' : 'ArtisanDashboard',
        },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => selectRole('client')}
      >
        <Text style={styles.buttonText}>I'm a Client</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => selectRole('artisan')}
      >
        <Text style={styles.buttonText}>I'm an Artisan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#D84315',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});