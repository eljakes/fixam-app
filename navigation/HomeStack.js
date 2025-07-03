// navigation/HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ClientDashboardScreen from '../screens/Dashboard/ClientDashboardScreen';
import BrowseJobsScreen from '../screens/Home/BrowseJobsScreen';
import SearchResultsScreen from '../screens/Home/SearchResultsScreen';
import ArtisanProfileScreen from '../screens/Artisan/ArtisanProfileScreen';
import BookingScreen from '../screens/Booking/BookingScreen';
import BookingConfirmationScreen from '../screens/Booking/BookingConfirmationScreen';
import BookingHistoryScreen from '../screens/Booking/BookingHistoryScreen';

import WalletScreen from '../screens/Wallet/WalletScreen';
import DepositScreen from '../screens/Wallet/DepositScreen';
import WithdrawScreen from '../screens/Wallet/WithdrawScreen';
import MakePaymentScreen from '../screens/Wallet/MakePaymentScreen';
import LinkAccountScreen from '../screens/Wallet/LinkAccountScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';

import PostJobScreen from '../screens/Jobs/PostJobScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClientDashboard" component={ClientDashboardScreen} />
      <Stack.Screen name="BrowseJobs" component={BrowseJobsScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      <Stack.Screen name="ArtisanProfile" component={ArtisanProfileScreen} />
      <Stack.Screen name="Booking" component={BookingScreen} />
      <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
      <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />

      <Stack.Screen name="Wallet" component={WalletScreen} />
      <Stack.Screen name="Deposit" component={DepositScreen} />
      <Stack.Screen name="Withdraw" component={WithdrawScreen} />
      <Stack.Screen name="MakePayment" component={MakePaymentScreen} />
      <Stack.Screen name="LinkAccount" component={LinkAccountScreen} />

      <Stack.Screen name="PostJob" component={PostJobScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}