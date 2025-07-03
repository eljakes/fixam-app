import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// ✅ 9 Carousel Images from assets/rolepix/
const slides = [
  require('../../assets/rolepix/slide1.jpg'),
  require('../../assets/rolepix/slide2.jpg'),
  require('../../assets/rolepix/slide3.jpg'),
  require('../../assets/rolepix/slide4.jpg'),
  require('../../assets/rolepix/slide5.jpg'),
  require('../../assets/rolepix/slide6.jpg'),
];

export default function RoleSelectionScreen() {
  const navigation = useNavigation();
  const flatListRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      flatListRef.current?.scrollToIndex({ index: next, animated: true });
      setCurrentSlide(next);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleRoleSelect = async (role) => {
    await AsyncStorage.setItem('userRole', role);
    navigation.reset({
      index: 0,
      routes: [{ name: 'RoleRedirect' }],
    });
  };

  const renderSlide = ({ item }) => (
    <Image source={item} style={styles.slide} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      {/* Background Carousel */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={StyleSheet.absoluteFill}
      />

      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Bottom Content */}
      <View style={styles.bottomSection}>
        <Text style={styles.title}>Select Your Role</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRoleSelect('client')}
        >
          <Text style={styles.buttonText}>I’m a Client</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRoleSelect('artisan')}
        >
          <Text style={styles.buttonText}>I’m an Artisan</Text>
        </TouchableOpacity>

        {/* Slide indicators */}
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlide === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    height,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: '#00000080',
    padding: 6,
    borderRadius: 20,
    zIndex: 10,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff80',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 14,
  },
});