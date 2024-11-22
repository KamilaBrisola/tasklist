import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import TaskCard from './TaskCard';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome da Tarefa' />
      <Text style={styles.label}> Tarefa Descrição</Text>
      <TextInput 
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa'
        multiline  />
      <View style={styles.buttonContainer}>
        <Button 
          title='Salvar'
          style={styles.buttonColor}
          color='#191970'/>
      </View>

      <TaskCard 
        title={"Teste"}
        desc={"Descrição Teste"}
        status={"Done"}
        onClick={()=>{
          alert("Deletar")
        }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8DC',
    
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


