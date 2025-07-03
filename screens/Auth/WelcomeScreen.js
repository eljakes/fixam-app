import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const slides = [
  require('../../assets/welcome/slide1.jpg'),
  require('../../assets/welcome/slide2.jpg'),
  require('../../assets/welcome/slide3.jpg'),
];

export default function WelcomeScreen() {
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

  const renderSlide = ({ item }) => (
    <Image source={item} style={styles.slide} resizeMode="cover" />
  );

  return (
    <View style={styles.container}>
      {/* Background Image Carousel */}
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

      {/* Overlay Content */}
      <View style={styles.overlay}>
        {/* FixAm Logo Top-right */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>FixAm</Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.subtitle}>Connecting Clients with Trusted Professionals</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondary]}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={[styles.buttonText, { color: '#D84315' }]}>Sign Up</Text>
          </TouchableOpacity>

          {/* Slide Indicators */}
          <View style={styles.dotsContainer}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentSlide === index ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
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
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  logoContainer: {
    alignItems: 'flex-end',
    marginTop: 110,
    marginRight: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  bottomSection: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 40,
    textAlign: 'center',
    maxWidth: 300,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 16,
    width: '80%',
  },
  secondary: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D84315',
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
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
    backgroundColor: '#FFFFFF',
    width: 14,
  },
});