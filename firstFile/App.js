  import React,{useState} from 'react';
  import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

  export default function App() {
    const [anything, setAnything]=useState('');
    const [arrayData, setArrayData]=useState([]);

    const addValue= (enteredText)=>{
      setAnything(enteredText);
    }

    const saveData=()=>{
      setArrayData(currentData=>[...currentData,{id:Math.random().toString(), text:anything}]);
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

          <FlatList keyExtractor={(item, index)=>item.id} data={arrayData} renderItem={itemData =>
            <View style={styles.listStyle}>
              <Text>{itemData.item.text}</Text>
            </View>}>
          </FlatList>



      </View>
    );
  }

  const styles = StyleSheet.create({
    firstStyle:{
      padding:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',

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
