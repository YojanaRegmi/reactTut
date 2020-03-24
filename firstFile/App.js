  import React,{useState} from 'react';
  import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

  export default function App() {
    const [anything, setAnything]=useState('');
    const [arrayData, setArrayData]=useState([]);

    const addValue= (enteredText)=>{
      setAnything(enteredText);
    }

    const saveData=()=>{
      setArrayData(currentData=>[...currentData, anything]);
    }

    return (
      <View style={styles.container}>

        <View>
          <TextInput 
          placeholder='enter anything to be displayed'
          onChangeText={addValue}
          />
          <Button title='add' onPress={saveData}/>
          </View>

        <View>
         <Text>Open up App.js to start working on your app!</Text>
         <Text>display is printed here</Text>
         <Text>{arrayData.map((data) => <Text>{data}</Text>)}</Text>
        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
