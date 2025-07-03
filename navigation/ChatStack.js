// navigation/ChatStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatListScreen from '../screens/Chat/ChatListScreen';
import ChatScreen from '../screens/Chat/ChatScreen';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatList" component={ChatListScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
}