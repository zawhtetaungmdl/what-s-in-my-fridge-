import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import FridgeScreen from '../screens/FridgeScreen';
import ListScreen from '../screens/ListScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof MaterialCommunityIcons.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Fridge') {
            iconName = focused ? 'fridge' : 'fridge-outline';
          } else if (route.name === 'List') {
            iconName = focused ? 'format-list-bulleted' : 'format-list-checkbox';
          }

          // Inactive state shows icon only, active state shows icon + label + background color
          // Logic for background color is handled in tabBarStyle or tabBarButton if needed,
          // but for standard bottom tab, we can use tabBarActiveTintColor.
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#10b981', // Primary color from design
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Fridge" component={FridgeScreen} />
      <Tab.Screen name="List" component={ListScreen} />
    </Tab.Navigator>
  );
}
