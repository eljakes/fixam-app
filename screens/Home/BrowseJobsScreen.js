import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const ghanaRegions = {
  "Greater Accra": ["Accra", "Tema", "Madina", "Adenta"],
  "Ashanti": ["Kumasi", "Obuasi", "Ejisu", "Konongo"],
  "Central": ["Cape Coast", "Mankessim", "Kasoa"],
  "Western": ["Takoradi", "Tarkwa", "Sekondi"],
  "Eastern": ["Koforidua", "Nkawkaw", "Suhum"],
  "Volta": ["Ho", "Aflao", "Keta"],
};

const artisanCategories = [
  "Plumber",
  "Electrician",
  "Carpenter",
  "Painter",
  "Tiler",
  "Mechanic",
  "AC Technician",
  "Welder",
];

export default function BrowseJobsScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const [openRegion, setOpenRegion] = useState(false);
  const [region, setRegion] = useState(null);
  const [regionItems, setRegionItems] = useState(
    Object.keys(ghanaRegions).map((r) => ({ label: r, value: r }))
  );

  const [openArea, setOpenArea] = useState(false);
  const [area, setArea] = useState(null);
  const [areaItems, setAreaItems] = useState([]);

  useEffect(() => {
    if (region) {
      setArea(null); // reset area when region changes
      setAreaItems(ghanaRegions[region].map((a) => ({ label: a, value: a })));
    }
  }, [region]);

  const filteredCategories = artisanCategories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  const handleBack = () => navigation.goBack();
  const handleHome = () => navigation.navigate('Home');

  const handleCategoryPress = (category) => {
    navigation.navigate('SearchResults', {
      category,
      region,
      area,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCategoryPress(item)}>
      <Ionicons name="construct" size={24} color="#D84315" />
      <Text style={styles.cardLabel}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#D84315" />
      </TouchableOpacity>

      <Text style={styles.title}>Browse Jobs</Text>

      {/* Search Input */}
      <TextInput
        style={styles.input}
        placeholder="I’m looking for..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />

      {/* Region Dropdown */}
      <DropDownPicker
        open={openRegion}
        value={region}
        items={regionItems}
        setOpen={setOpenRegion}
        setValue={setRegion}
        setItems={setRegionItems}
        placeholder="Select Region"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownBox}
        zIndex={3000}
      />

      {/* Area Dropdown */}
      <DropDownPicker
        open={openArea}
        value={area}
        items={areaItems}
        setOpen={setOpenArea}
        setValue={setArea}
        setItems={setAreaItems}
        placeholder="Select Area"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownBox}
        disabled={!region}
        zIndex={2000}
      />

      {/* Job Grid */}
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />

      {/* Home Button */}
      <TouchableOpacity onPress={handleHome} style={styles.homeButton}>
        <Ionicons name="home" size={24} color="#D84315" />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    zIndex: 9999,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#BF360C',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
  },
  dropdown: {
    marginBottom: 16,
    borderColor: '#ccc',
  },
  dropdownBox: {
    borderColor: '#ccc',
  },
  grid: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    flex: 1,
    elevation: 2,
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
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