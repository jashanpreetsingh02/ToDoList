import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
 
interface ToDoFormProps {
  addTask: (taskText: string) => void;
}
 
export default function ToDoForm({ addTask }: ToDoFormProps) {
  const [taskText, setTaskText] = useState<string>(''); // Local state for input field
 
  const handleAddTask = () => {
    addTask(taskText); // Pass task to App component
    setTaskText(''); // Clear input field
  };
 
  return (
<View style={styles.form}>
<TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
      />
<Button title="Add Task" onPress={handleAddTask} />
</View>
  );
}
 
const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});