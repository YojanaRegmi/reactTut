  import React,{useState} from 'react';
  import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
  import GoalList from './components/GoalList.js';
  import GoalInput from './components/GoalInput.js';

  export default function App() {
    
    const [arrayData, setArrayData]=useState([]);

    
    const saveData= anythingApp=>{
      setArrayData(currentData=>
        [...currentData,{id:Math.random().toString(), text:anythingApp}]);
    }

    return (
      <View style={styles.container}>

       <GoalInput onGoalAdded={saveData} /> 
       {/* onGoalAdded is the prop passed in GoalInput */}

        <FlatList keyExtractor={(item, index)=>item.id} 
        data={arrayData} renderItem={itemData =>
         <GoalList title={itemData.item.text}/>
         }
        />



      </View>
    );
  }

  const styles = StyleSheet.create({
       
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
