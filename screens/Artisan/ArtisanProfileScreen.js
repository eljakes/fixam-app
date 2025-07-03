import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ArtisanProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const artisan = route.params?.artisan;

  const handleBack = () => navigation.goBack();

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.07 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        {/* Profile Picture */}
        <Image
          source={{ uri: artisan?.image || 'https://via.placeholder.com/120' }}
          style={styles.avatar}
        />

        {/* Name & Info */}
        <Text style={styles.name}>{artisan?.name || 'Artisan Name'}</Text>
        <Text style={styles.category}>{artisan?.category || 'Category'}</Text>
        <Text style={styles.location}>{artisan?.location || 'Location'}</Text>
        <Text style={styles.rating}>⭐ {artisan?.rating || '4.5'} / 5</Text>

        {/* Bio */}
        <View style={styles.bioCard}>
          <Text style={styles.bioTitle}>About</Text>
          <Text style={styles.bioText}>
            Experienced and professional{' '}
            {artisan?.category?.toLowerCase() || 'artisan'}. Available to work
            anywhere in {artisan?.location || 'Ghana'}.
          </Text>
        </View>

        {/* Book Now */}
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('Booking', { artisan })}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
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
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
    backgroundColor: 'transparent',
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 40,
    left: 20,
    zIndex: 2,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 3,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#D84315',
    marginBottom: 14,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 4,
  },
  category: {
    fontSize: 16,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  rating: {
    fontSize: 14,
    color: '#00796B',
    marginTop: 8,
    marginBottom: 20,
  },
  bioCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 30,
    elevation: 2,
  },
  bioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D84315',
    marginBottom: 6,
  },
  bioText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  bookButton: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 2,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});