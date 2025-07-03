import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const ghanaRegions = {
  'Greater Accra': ['Accra', 'Tema', 'Madina'],
  Ashanti: ['Kumasi', 'Obuasi'],
  Central: ['Cape Coast', 'Kasoa'],
  Eastern: ['Koforidua', 'Nkawkaw'],
};

export default function BoostPostScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { postId } = route.params || {};

  const [days, setDays] = useState(1);
  const [estimatedReach, setEstimatedReach] = useState(500);
  const [totalAmount, setTotalAmount] = useState(10);

  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [regionItems, setRegionItems] = useState(
    Object.keys(ghanaRegions).map((r) => ({ label: r, value: r }))
  );

  const [areaOpen, setAreaOpen] = useState(false);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [areaItems, setAreaItems] = useState([]);

  useEffect(() => {
    const reach = days * 500;
    const amount = days * 10;
    setEstimatedReach(reach);
    setTotalAmount(amount);
  }, [days]);

  useEffect(() => {
    const allAreas = selectedRegions.flatMap((region) => ghanaRegions[region] || []);
    const uniqueAreas = [...new Set(allAreas)].map((a) => ({ label: a, value: a }));
    setAreaItems(uniqueAreas);
  }, [selectedRegions]);

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={styles.background}
      imageStyle={{ opacity: 0.07 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#D84315" />
          </TouchableOpacity>

          <Text style={styles.title}>Boost Post</Text>

          {/* Duration */}
          <View style={styles.section}>
            <Text style={styles.label}>Select Duration (in days)</Text>
            <Text style={styles.durationValue}>{days.toFixed(0)} day(s)</Text>
            <Slider
              minimumValue={1}
              maximumValue={30}
              step={1}
              value={days}
              onValueChange={setDays}
              minimumTrackTintColor="#D84315"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#D84315"
              style={styles.slider}
            />
          </View>

          {/* Reach */}
          <View style={styles.section}>
            <Text style={styles.label}>Estimated Reach</Text>
            <Text style={styles.value}>{estimatedReach.toLocaleString()} people</Text>
          </View>

          {/* Amount */}
          <View style={styles.section}>
            <Text style={styles.label}>Total Amount</Text>
            <Text style={styles.amount}>GH₵{totalAmount.toFixed(2)}</Text>
          </View>

          {/* Region Selection */}
          <View style={styles.section}>
            <Text style={styles.label}>Target Regions</Text>
            <DropDownPicker
              open={regionOpen}
              value={selectedRegions}
              items={regionItems}
              setOpen={setRegionOpen}
              setValue={setSelectedRegions}
              setItems={setRegionItems}
              multiple={true}
              placeholder="Select Region(s)"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownBox}
              zIndex={3000}
            />
          </View>

          {/* Area Selection */}
          <View style={styles.section}>
            <Text style={styles.label}>Target Areas</Text>
            <DropDownPicker
              open={areaOpen}
              value={selectedAreas}
              items={areaItems}
              setOpen={setAreaOpen}
              setValue={setSelectedAreas}
              setItems={setAreaItems}
              multiple={true}
              placeholder="Select Area(s)"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownBox}
              zIndex={2000}
              disabled={selectedRegions.length === 0}
            />
          </View>

          {/* Proceed to Payment */}
          <TouchableOpacity
            style={styles.payButton}
            onPress={() => navigation.navigate('BoostPayment', { amount: totalAmount })}
          >
            <Text style={styles.payText}>Proceed to Payment</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    left: 16,
    zIndex: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D84315',
    marginTop: 60,
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginBottom: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    color: '#00796B',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#BF360C',
  },
  durationValue: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
    fontWeight: '600',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  dropdown: {
    borderColor: '#ccc',
    borderRadius: 10,
    minHeight: 48,
  },
  dropdownBox: {
    borderColor: '#ccc',
  },
  payButton: {
    marginTop: 20,
    backgroundColor: '#D84315',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 4,
  },
  payText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});