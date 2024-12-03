import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
 
interface ToDoListProps {
  tasks: string[]; // Array of tasks passed from the parent
}
 
export default function ToDoList({ tasks }: ToDoListProps) {
  const router = useRouter(); // Use Expo Router
 
  return (
<View style={styles.listContainer}>
      {tasks.length === 0 ? (
<Text style={styles.emptyMessage}>No tasks available. Add some!</Text>
      ) : (
<FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
<TouchableOpacity
              onPress={() => router.push('/details')} // Navigate to details.tsx
>
<Text style={styles.task}>{item}</Text>
</TouchableOpacity>
          )}
        />
      )}
</View>
  );
}
 
const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
    flex: 1,
  },
  task: {
    fontSize: 16,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  emptyMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});