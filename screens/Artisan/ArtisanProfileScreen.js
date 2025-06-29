import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ArtisanProfileScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const artisan = route.params?.artisan;

  const handleBack = () => navigation.goBack();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      {/* Profile Info */}
      <Image
        source={{ uri: artisan?.image || 'https://via.placeholder.com/120' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{artisan?.name || 'Artisan Name'}</Text>
      <Text style={styles.category}>{artisan?.category || 'Category'}</Text>
      <Text style={styles.location}>{artisan?.location || 'Location'}</Text>
      <Text style={styles.rating}> {artisan?.rating || '4.5'}</Text>

      {/* Bio */}
      <View style={styles.bioBox}>
        <Text style={styles.bioTitle}>About</Text>
        <Text style={styles.bioText}>
          Experienced and professional {artisan?.category?.toLowerCase() || 'artisan'}.
          Available to work anywhere in {artisan?.location || 'Ghana'}.
        </Text>
      </View>

      {/* Book Button */}
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate('Booking', { artisan })}
      >
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF3E0',
    flexGrow: 1,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 80,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#BF360C',
  },
  category: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  location: {
    fontSize: 14,
    color: '#777',
    marginBottom: 8,
  },
  rating: {
    fontSize: 14,
    color: '#00796B',
    marginBottom: 20,
  },
  bioBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    marginBottom: 30,
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
  },
  bookButton: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});