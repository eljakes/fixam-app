import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth Screens
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import RoleSelectionScreen from '../screens/Auth/RoleSelectionScreen';
import RoleRedirectScreen from '../screens/Auth/RoleRedirectScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';

// Dashboard Screens
import ClientDashboardScreen from '../screens/Dashboard/ClientDashboardScreen';
import ArtisanDashboardScreen from '../screens/Dashboard/ArtisanDashboardScreen';

// Core App Screens
import ChatScreen from '../screens/Chat/ChatScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import WalletScreen from '../screens/Wallet/WalletScreen';
import SettingsScreen from '../screens/Profile/SettingsScreen';
import StoreScreen from '../screens/Store/StoreScreen';
import PostItemScreen from '../screens/Store/PostItemScreen';
import BrowseJobsScreen from '../screens/Home/BrowseJobsScreen';
import SearchResultsScreen from '../screens/Home/SearchResultsScreen';
import ArtisanProfileScreen from '../screens/Artisan/ArtisanProfileScreen';
import BookingScreen from '../screens/Booking/BookingScreen';
import BookingConfirmationScreen from '../screens/Booking/BookingConfirmationScreen';
import BookingHistoryScreen from '../screens/Booking/BookingHistoryScreen';
import PostJobScreen from '../screens/Jobs/PostJobScreen';
import SavedPostsScreen from '../screens/Store/SavedPostsScreen';
import BoostPostScreen from '../screens/Store/BoostPostScreen';
import ChatListScreen from '../screens/Chat/ChatListScreen';

// Wallet & Payments
import DepositScreen from '../screens/Wallet/DepositScreen';
import WithdrawScreen from '../screens/Wallet/WithdrawScreen';
import MakePaymentScreen from '../screens/Wallet/MakePaymentScreen';
import LinkAccountScreen from '../screens/Wallet/LinkAccountScreen';
import BoostPaymentScreen from '../screens/Store/BoostPaymentScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Onboarding + Auth */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="RoleRedirect" component={RoleRedirectScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

      {/* Dashboards */}
      <Stack.Screen name="ClientDashboard" component={ClientDashboardScreen} />
      <Stack.Screen name="ArtisanDashboard" component={ArtisanDashboardScreen} />

      {/* Main App Features */}
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Store" component={StoreScreen} />
      <Stack.Screen name="PostItem" component={PostItemScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      <Stack.Screen name="JobDetails" component={BrowseJobsScreen} />
      <Stack.Screen name="ArtisanProfile" component={ArtisanProfileScreen} />
      <Stack.Screen name="PostJob" component={PostJobScreen} />
      <Stack.Screen name="SavedPosts" component={SavedPostsScreen} />
      <Stack.Screen name="BoostPost" component={BoostPostScreen} />
      <Stack.Screen name="ChatList" component={ChatListScreen} />

      {/* Booking */}
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
      <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />

      {/* Wallet / Payment */}
      <Stack.Screen name="Deposit" component={DepositScreen} />
      <Stack.Screen name="Withdraw" component={WithdrawScreen} />
      <Stack.Screen name="MakePayment" component={MakePaymentScreen} />
      <Stack.Screen name="LinkAccount" component={LinkAccountScreen} />
      <Stack.Screen name="BoostPayment" component={BoostPaymentScreen} />
    </Stack.Navigator>
  );
}