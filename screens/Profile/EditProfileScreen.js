// screens/EditProfileScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function EditProfileScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('Elvis Owusu-Sekyere');
  const [bio, setBio] = useState('Passionate software developer and FixAm user.');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');

  const handleSave = () => {
    alert('Profile updated successfully!');
    navigation.navigate('Profile');
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.06 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#D84315" />
            </TouchableOpacity>
            <Text style={styles.title}>Edit Profile</Text>
            <View style={{ width: 24 }} />
          </View>

          {/* Form Fields */}
          <View style={styles.card}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />

            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={bio}
              onChangeText={setBio}
              placeholder="Short bio"
              multiline
              numberOfLines={3}
            />

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="e.g. 0551234567"
              keyboardType="phone-pad"
            />

            <Text style={styles.label}>Location</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="City / Region"
            />

            <Text style={styles.label}>Skills / Profession</Text>
            <TextInput
              style={styles.input}
              value={skills}
              onChangeText={setSkills}
              placeholder="e.g. Electrician, Plumber"
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
    color: '#444',
  },
  input: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#D84315',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});