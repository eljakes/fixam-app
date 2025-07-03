// navigation/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import ChatStack from './ChatStack';
import StoreScreen from '../screens/Store/StoreScreen';
import PostItemScreen from '../screens/Store/PostItemScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SettingsScreen from '../screens/Profile/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#D84315',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingBottom: 4,
          height: 60,
        },
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Chat':
              iconName = 'chatbubbles';
              break;
            case 'Store':
              iconName = 'storefront';
              break;
            case 'Sell':
              iconName = 'add-circle';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            case 'Settings':
              iconName = 'settings';
              break;
            default:
              iconName = 'ellipse';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Sell" component={PostItemScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}