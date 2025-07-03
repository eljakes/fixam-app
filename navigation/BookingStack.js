// navigation/BookingStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingHistoryScreen from '../screens/Booking/BookingHistoryScreen';

const Stack = createNativeStackNavigator();

export default function BookingStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BookingHistoryMain"
        component={BookingHistoryScreen}
      />
    </Stack.Navigator>
  );
}