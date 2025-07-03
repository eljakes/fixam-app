import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // ✅ You can replace this with real login logic later
    navigation.navigate('RoleSelection');
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.2 }} // 👈 subtle dark background
    >
      <View style={styles.container}>
        {/* Back Arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email or Phone"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password */}
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{ marginTop: 6, alignSelf: 'flex-end' }}
        >
          <Text style={{ color: '#D84315', fontSize: 13, fontWeight: '500' }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        {/* Switch to Signup */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.switchText}>
            Don’t have an account?{' '}
            <Text style={{ color: '#D84315', fontWeight: '600' }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D84315',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  passwordInput: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingRight: 45,
  },
  eyeIcon: {
    position: 'absolute',
    right: 14,
    top: 14,
  },
  button: {
    backgroundColor: '#D84315',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 14,
  },
});