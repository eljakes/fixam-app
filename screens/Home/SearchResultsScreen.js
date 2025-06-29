import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const sampleResults = [
  {
    id: '1',
    name: 'David Kwatelai',
    category: 'Plumber',
    location: 'Kumasi',
    rating: 4.8,
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'Kofi Owusu-Sekyere',
    category: 'Electrician',
    location: 'Kumasi',
    rating: 4.6,
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'Kwame Opare',
    category: 'Mechanic',
    location: 'Kumasi',
    rating: 4.6,
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '4',
    name: 'Dominic Obinna',
    category: 'Electrician',
    location: 'Dansoman',
    rating: 4.6,
    image: 'https://via.placeholder.com/100',
  },
];

export default function SearchResultsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { category, region, area } = route.params || {};

  const handleBack = () => navigation.goBack();
  const handleHome = () => navigation.navigate('Home');

  // ✅ Navigate to ArtisanProfile
  const handleCardPress = (artisan) => {
    navigation.navigate('ArtisanProfile', { artisan });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.details}>
          {item.category} • {item.location}
        </Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>
        Showing {category || 'all'} in {area || region || 'Ghana'}
      </Text>

      <FlatList
        data={sampleResults}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.empty}>No artisans found in this location.</Text>
        }
      />

      {/* Home Button */}
      <TouchableOpacity onPress={handleHome} style={styles.homeButton}>
        <Ionicons name="home" size={24} color="#D84315" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#BF360C',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 100,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 14,
    alignItems: 'center',
    elevation: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  details: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  rating: {
    fontSize: 13,
    color: '#00796B',
    marginTop: 4,
  },
  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 16,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 4,
  },
});