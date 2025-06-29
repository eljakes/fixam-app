import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function JobDetailsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Only ONE Functional Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#D84315" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Details</Text>
        <View style={{ width: 26 }} /> {/* Balancer for centering title */}
      </View>

      {/* Job Details */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Plumbing Job - Accra</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Client</Text>
          <Text style={styles.value}>John Doe</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>East Legon, Accra</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>Monday, July 1, 2025</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>
            Fix leaking kitchen sink and install new tap. May require minor pipe adjustments. Please bring your own tools.
          </Text>
        </View>

        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply for Job</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Home Button */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF3E0' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D84315',
  },
  content: {
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#D84315',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 4,
    fontWeight: '600',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#D84315',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 30,
  },
  applyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: '#D84315',
    padding: 10,
    borderRadius: 25,
    zIndex: 1,
  },
});