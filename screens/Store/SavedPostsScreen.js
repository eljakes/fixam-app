import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SavedPostsScreen() {
  const navigation = useNavigation();

  const [savedItems, setSavedItems] = useState([
    {
      id: '1',
      title: 'Electric Drill',
      price: '₵120',
      image: 'https://via.placeholder.com/300x200.png?text=Electric+Drill',
    },
    {
      id: '2',
      title: 'Paint Brush Set',
      price: '₵45',
      image: 'https://via.placeholder.com/300x200.png?text=Paint+Brush',
    },
  ]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            size={20}
            color="#D84315"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.07 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#D84315" />
          </TouchableOpacity>

          <Text style={styles.header}>Saved Posts</Text>

          <FlatList
            data={savedItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
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
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 16,
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D84315',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  details: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#D84315',
    marginTop: 4,
    marginBottom: 8,
  },
});