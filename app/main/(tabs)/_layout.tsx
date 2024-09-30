import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, router } from 'expo-router';
import React from 'react';
export default function TabLayout() {

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#021A06',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: { backgroundColor: 'green' },
      headerStyle: { backgroundColor: 'green' },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="archives"
        options={{
          title: 'Meus Arquivos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="newCatalog"
        listeners={{tabPress: () => { router.replace('../content/catalog/register') }}}
        options={{
          title: 'Novo registro',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Catálogos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}