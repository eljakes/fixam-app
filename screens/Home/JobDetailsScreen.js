import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function JobDetailsScreen({ route }) {
  const navigation = useNavigation();
  const job = route?.params?.job || {
    title: 'Plumbing Work Needed',
    description: 'Fix leaking pipes in kitchen and bathroom.',
    client: 'John Doe',
    location: 'Accra, Ghana',
    price: 'GH₵ 250',
    date: '2025-07-05',
  };

  const handleBack = () => navigation.goBack();

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.12 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        <Text style={styles.title}>{job.title}</Text>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Client</Text>
          <Text style={styles.value}>{job.client}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>{job.location}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{job.date}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Price</Text>
          <Text style={styles.value}>{job.price}</Text>
        </View>

        <View style={styles.detailBox}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{job.description}</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Accept Job</Text>
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
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#BF360C',
    marginBottom: 30,
    textAlign: 'center',
  },
  detailBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});