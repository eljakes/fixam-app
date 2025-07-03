// navigation/AuthNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import RoleSelectionScreen from '../screens/Auth/RoleSelectionScreen';
import RoleRedirectScreen from '../screens/Auth/RoleRedirectScreen';

import ChatScreen from '../screens/Chat/ChatScreen';
import WalletScreen from '../screens/Wallet/WalletScreen';
import PostJobScreen from '../screens/Jobs/PostJobScreen';
import PostItemScreen from '../screens/Store/PostItemScreen';
import BookingHistoryScreen from '../screens/Booking/BookingHistoryScreen';
import BoostPostScreen from '../screens/Store/BoostPostScreen';
import BoostPaymentScreen from '../screens/Store/BoostPaymentScreen';
import SavedPostsScreen from '../screens/Store/SavedPostsScreen';
import BrowseJobsScreen from '../screens/Home/BrowseJobsScreen';
import DepositScreen from '../screens/Wallet/DepositScreen';
import WithdrawScreen from '../screens/Wallet/WithdrawScreen';
import MakePaymentScreen from '../screens/Wallet/MakePaymentScreen';
import LinkAccountScreen from '../screens/Wallet/LinkAccountScreen';


import MainTabs from './MainTabs'; // ✅ Bottom Tab Navigator

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Onboarding */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="RoleRedirect" component={RoleRedirectScreen} />

      {/* Main App with Tabs */}
      <Stack.Screen name="MainTabs" component={MainTabs} />

      {/* Stack Screens accessible from anywhere */}
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="PostJob" component={PostJobScreen} />
      <Stack.Screen name="PostItem" component={PostItemScreen} />
      <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />
      <Stack.Screen name="BoostPost" component={BoostPostScreen} />
      <Stack.Screen name="BoostPayment" component={BoostPaymentScreen} />
      <Stack.Screen name="SavedPosts" component={SavedPostsScreen} />
      <Stack.Screen name="JobDetails" component={BrowseJobsScreen} />
      <Stack.Screen name="Deposit" component={DepositScreen} />
      <Stack.Screen name="Withdraw" component={WithdrawScreen} />
      <Stack.Screen name="MakePayment" component={MakePaymentScreen} />
      <Stack.Screen name="LinkAccount" component={LinkAccountScreen} />
    </Stack.Navigator>
  );
}