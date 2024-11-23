import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import TaskCard from './TaskCard';
import { useState } from 'react';


export default function App() {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [task, setTask] = useState([]);
  const [alert1, setAlert1] = useState(false);
  const [alert2, setAlert2] = useState(false);

  const onMessage = () => {
    setAlert1(false);
    setAlert2(false);

    if (setTaskTitle !== "" && taskDescription.length >= 10) {
      setTask([
        ...task,
        {
          id: task.length + 1,
          title: taskTitle,
          description: taskDescription
        }
      ])

      setTaskTitle("");
      setTaskDescription("");

    } else {
      if (!taskTitle.trim()) {
        setAlert1(true)
        setTimeout(() => {
          setAlert1(false);
        }, 4000);
      }

      if (taskDescription.length < 10) {
        setAlert2(true)
        setTimeout(() => {
          setAlert2(false);
        }, 4000);
      }

    }
  };
  const deleteTask = (index) => {
    const updateTasks = [...task];
    updateTasks.splice(index, 1)
    setTask(updateTasks);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa:'
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      {
        alert1
          ?
          <Text style={styles.errorText}>
            Necessário informar o título
          </Text>
          : <></>
      }
      <Text style={styles.label}> Tarefa Descrição</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      {
        alert2
          ? <Text style={styles.errorText}>
            Necessário mínimo 10 caracteres
          </Text>
          : <></>
      }

      <View style={styles.buttonContainer}>
        <Button
          title='Salvar'
          style={styles.buttonColor}
          color='#191970'
          onPress={() => onMessage()} />
      </View>

      {task.length > 0
        ? <View style={styles.separator} />
        : <></>}

      <ScrollView style={styles.scrollHeight}>
        {task.map((item, index) => (
          <TaskCard
            title={item.title}
            desc={item.description}
            status={"Done"}
            onClick={() => {
              deleteTask(index);
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F0FFFF',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#191970',
  },
  input: {
    borderWidth: 4,
    borderColor: '#808080',
    borderRadius: 8,
    padding: 16,
    fontSize: 13,
    marginBottom: 20,
    color: '#483D8B',
    textAlign: 'justify',
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 16,
  },
  buttonColor: {
    borderRadius: 12,
  },
  separator: {
    marginTop: 16,
    width: "100%",
    height: 1,
    backgroundColor: "#222"
  },
  errorText: {
    color: "red",
    fontSize: 12,
    fontStyle: "italic"
  },
  scrollHeight: {
    height: 100 
  }

});


