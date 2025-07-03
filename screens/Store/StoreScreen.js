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

const mockItems = [
  {
    id: '1',
    user: 'Bright Tools',
    image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/drill-1239247_1280.jpg',
    title: 'Electric Drill',
    caption: 'Perfect for home repairs. Gently used.',
    price: '₵120',
    liked: false,
    saved: false,
    boosted: true,
  },
  {
    id: '2',
    user: 'JaneTech',
    image: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/screwdriver-1957465_1280.jpg',
    title: 'Screwdriver Set',
    caption: 'All sizes included. Brand new!',
    price: '₵45',
    liked: true,
    saved: true,
    boosted: false,
  },
  {
    id: '3',
    user: 'Bright Tools',
    image: 'https://cdn.pixabay.com/photo/2016/03/27/21/16/drill-1289922_1280.jpg',
    title: 'Electric Drill Pro',
    caption: 'Heavy duty and cordless.',
    price: '₵150',
    liked: false,
    saved: false,
    boosted: true,
  },
  {
    id: '4',
    user: 'JaneTech',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/12/35/screwdriver-698653_1280.jpg',
    title: 'Screw Kit',
    caption: 'Includes all heads and sizes.',
    price: '₵55',
    liked: true,
    saved: true,
    boosted: false,
  },
  {
    id: '5',
    user: 'Fast Tools',
    image: 'https://cdn.pixabay.com/photo/2013/07/12/17/58/hammer-152215_1280.png',
    title: 'Hammer',
    caption: 'Strong grip, rarely used.',
    price: '₵30',
    liked: false,
    saved: false,
    boosted: true,
  },
  {
    id: '6',
    user: 'CraftPro',
    image: 'https://cdn.pixabay.com/photo/2018/04/28/13/34/paint-3356356_1280.jpg',
    title: 'Paint Roller Kit',
    caption: 'Includes multiple roller heads and tray.',
    price: '₵60',
    liked: false,
    saved: false,
    boosted: false,
  },
  {
    id: '7',
    user: 'MegaFix GH',
    image: 'https://cdn.pixabay.com/photo/2014/11/03/11/08/toolbox-515710_1280.jpg',
    title: 'Complete Toolbox Set',
    caption: 'All-in-one solution for quick repairs.',
    price: '₵200',
    liked: true,
    saved: false,
    boosted: true,
  },
];

export default function StoreScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState(mockItems);

  const toggleLike = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  const toggleSave = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };

  const sortedItems = [...items].sort((a, b) => {
    if (a.boosted && !b.boosted) return -1;
    if (!a.boosted && b.boosted) return 1;
    return 0;
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      {item.boosted && <Text style={styles.boostedBadge}>Boosted</Text>}
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.caption}>{item.caption}</Text>

        <View style={styles.actionRow}>
          <View style={styles.leftIcons}>
            <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.iconButton}>
              <Ionicons
                name={item.liked ? 'heart' : 'heart-outline'}
                size={18}
                color={item.liked ? '#D84315' : '#555'}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.iconButton}>
              <Ionicons name="chatbubble-ellipses-outline" size={18} color="#555" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleSave(item.id)} style={styles.iconButton}>
              <Ionicons
                name={item.saved ? 'bookmark' : 'bookmark-outline'}
                size={18}
                color={item.saved ? '#D84315' : '#333'}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.boostButton}
            onPress={() => navigation.navigate('BoostPost', { postId: item.id })}
          >
            <Text style={styles.boostButtonText}>Boost</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.07 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="#D84315" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.savedButton}
              onPress={() => navigation.navigate('SavedPosts')}
            >
              <Ionicons name="bookmark" size={18} color="#D84315" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={sortedItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingTop: 90, paddingBottom: 80 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
  },
  topBar: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 30 : 10, // moved up from 50/30 to 30/10
    width: '100%',
    height: 50,
    backgroundColor: 'transparent', // made transparent
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 3,
  },
  savedButton: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 2,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  boostedBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: '#D84315',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    zIndex: 2,
  },
  details: {
    padding: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#D84315',
    marginTop: 4,
  },
  caption: {
    fontSize: 13,
    color: '#444',
    marginTop: 4,
    marginBottom: 8,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftIcons: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  boostButton: {
    backgroundColor: '#D84315',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  boostButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});