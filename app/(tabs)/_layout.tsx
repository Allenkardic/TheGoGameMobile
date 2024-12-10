import {Tabs} from 'expo-router';
import React from 'react';

import FeatherIcon from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <FeatherIcon name={focused ? 'x' : 'x'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({color, focused}) => (
            <FeatherIcon name={focused ? 'x' : 'x'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
