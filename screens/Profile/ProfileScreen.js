// screens/ProfileScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleEditProfile = () => {
    navigation.navigate('Home', { screen: 'EditProfile' });
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.05 }}
    >
      <SafeAreaView style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        {/* Profile Picture */}
        <View style={styles.profileImageWrapper}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/men/75.jpg',
            }}
            style={styles.profileImage}
          />
        </View>

        {/* Name */}
        <Text style={styles.name}>Elvis Owusu-Sekyere</Text>

        {/* Bio */}
        <Text style={styles.bio}>
          Passionate software developer and FixAm user. Love solving problems and connecting with artisans.
        </Text>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>25</Text>
            <Text style={styles.statLabel}>Jobs</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Ionicons name="create-outline" size={20} color="#fff" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 3,
  },
  profileImageWrapper: {
    borderWidth: 3,
    borderColor: '#D84315',
    borderRadius: 60,
    padding: 4,
    marginTop: 60,
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 30,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D84315',
  },
  statLabel: {
    fontSize: 12,
    color: '#555',
  },
  editButton: {
    flexDirection: 'row',
    backgroundColor: '#D84315',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
});