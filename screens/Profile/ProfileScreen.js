import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Elvis Owusu-Sekyere',
    email: 'elvis@example.com',
    phone: '+233 24 000 0000',
    bio: 'Plumber & Electrician. I love fixing things!',
  });

  const handleSave = () => {
    setIsEditing(false);
    // Later: Sync with backend (e.g., Firebase)
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>My Profile</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={profile.name}
          onChangeText={(text) => setProfile({ ...profile, name: text })}
          editable={isEditing}
          style={styles.input}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={profile.email}
          onChangeText={(text) => setProfile({ ...profile, email: text })}
          editable={isEditing}
          style={styles.input}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          value={profile.phone}
          onChangeText={(text) => setProfile({ ...profile, phone: text })}
          editable={isEditing}
          style={styles.input}
        />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Bio</Text>
        <TextInput
          value={profile.bio}
          onChangeText={(text) => setProfile({ ...profile, bio: text })}
          editable={isEditing}
          multiline
          numberOfLines={3}
          style={[styles.input, { height: 80, textAlignVertical: 'top' }]}
        />
      </View>

      <TouchableOpacity
        style={styles.editButton}
        onPress={isEditing ? handleSave : () => setIsEditing(true)}
      >
        <Text style={styles.editText}>{isEditing ? 'Save' : 'Edit Profile'}</Text>
      </TouchableOpacity>

      {/* Home Button */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home" size={28} color="#D84315" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    elevation: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    textAlign: 'center',
    marginBottom: 30,
  },
  fieldContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  editButton: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
  },
  editText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});