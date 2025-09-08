import { Stack } from 'expo-router';
import React from 'react';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Demon Slayer',
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: 'Detalhes',
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#fff',
          headerBackTitle: '',
        }}
      />
    </Stack>
  );
}