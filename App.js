import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa' />
      <Text style={styles.label}> Tarefa Descrição</Text>
      <TextInput style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline  />
      <View style={styles.buttonContainer}>
        <Button title='Salvar'
          style={styles.buttonColor}
          color='#191970'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#191970',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    marginBottom: 16,
    color: '#2F4F4F',
    textAlign: 'center',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    marginTop: 16,
  },
  buttonColor: {    
    borderRadius: 12,
  },

});
