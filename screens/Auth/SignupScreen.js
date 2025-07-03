import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  ImageBackground,
} from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SignupScreen() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{9,15}$/;
    return phoneRegex.test(phone);
  };

  const handleSignup = () => {
    if (!fullName || !phone || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Enter a valid phone number (9–15 digits).');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    navigation.navigate('Login'); // ✅ Proceed to Login
  };

  return (
    <ImageBackground
      source={require('../../assets/backgrounds/image1.jpg')}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.2 }}
    >
      <View style={styles.container}>
        {/* Back Arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#D84315" />
        </TouchableOpacity>

        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#999"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
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

        {/* Confirm Password */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye' : 'eye-off'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        {/* Error Message */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Sign Up */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or sign up with</Text>
          <View style={styles.line} />
        </View>

        {/* Google & Apple */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={20} color="#D84315" />
          </TouchableOpacity>
          {Platform.OS === 'ios' && (
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="apple" size={20} color="#D84315" />
            </TouchableOpacity>
          )}
        </View>

        {/* Switch to Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.switchText}>
            Already have an account?{' '}
            <Text style={{ color: '#D84315', fontWeight: '600' }}>Login</Text>
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
  errorText: {
    color: '#D84315',
    fontSize: 13,
    marginBottom: 10,
    marginTop: -8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D84315',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 8,
    color: '#999',
    fontSize: 13,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 12,
    elevation: 2,
  },
  switchText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 14,
  },
});