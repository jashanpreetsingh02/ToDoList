import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
 
export default function App() {
  const [tasks, setTasks] = useState<string[]>([]); // State to manage tasks
 
  // Function to add a new task
  const addTask = (taskText: string) => {
    if (taskText.trim() !== '' && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };
 
  return (
<View style={styles.container}>
<ToDoForm addTask={addTask} />
<ToDoList tasks={tasks} />
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});