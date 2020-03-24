  import React,{useState} from 'react';
  import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

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

        <View style={styles.firstStyle}>
          <TextInput 
          placeholder='enter anything to be displayed'
          onChangeText={addValue}
          />
          <Button title='add' onPress={saveData}/>
          </View>

          <ScrollView>
            {arrayData.map((values)=> <View key={values} style={styles.listStyle}><Text>{values}</Text></View>)}
          </ScrollView>



      </View>
    );
  }

  const styles = StyleSheet.create({
    firstStyle:{
      padding:10,
      flexDirection:'row',
      alignItems:'center',
      
    },
    listStyle:{
      backgroundColor:'#ccc',
      borderColor:'black',
      borderWidth:1,
      padding:10,
      margin:5,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
