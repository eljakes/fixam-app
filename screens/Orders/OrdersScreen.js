// screens/ProfileScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

export default function ProfileScreen() {
  const user = {
    name: 'Elvis Owusu-Sekyere',
    email: 'elvis@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    role: 'Client',
  };

  return (
    <ImageBackground
      source={require('../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.08 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.profileBox}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
          <Text style={styles.role}>{user.role}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.logout]}>
            <Text style={[styles.buttonText, styles.logoutText]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  profileBox: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  role: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
    fontStyle: 'italic',
  },
  actions: {
    width: '100%',
  },
  button: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logout: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D84315',
  },
  logoutText: {
    color: '#D84315',
  },
});