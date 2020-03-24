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
            {arrayData.map((values)=> <View style={styles.listStyle}><Text key={values}>{values}</Text></View>)}
          </View>


        {/* <View>
         <Text>display is printed here</Text>
         <Text>{arrayData.map((data) =>
         <View style={styles.listStyle}>
           <Text key={data}>{data}</Text>
           </View>)}
           </Text>
        </View> */}

      </View>
    );
  }

  const styles = StyleSheet.create({
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
