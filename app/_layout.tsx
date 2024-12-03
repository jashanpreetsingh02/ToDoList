import { Stack } from 'expo-router';
 
export default function Layout() {
  return (
<Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#f9f9f9' },
        headerTintColor: '#333',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
>
<Stack.Screen
        name="index" // Matches index.tsx
        options={{ title: 'ToDo List' }}
      />
<Stack.Screen
        name="details" // Matches details.tsx
        options={{ title: 'Task Details' }}
      />
</Stack>
  );
}