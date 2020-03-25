  import React,{useState} from 'react';
  import { StyleSheet,  View,  Button,  FlatList } from 'react-native';
  import GoalList from './components/GoalList.js';
  import GoalInput from './components/GoalInput.js';

  export default function App() {

    const cancelButton=()=>{
        setIsVisible(false);
    };
    
    const [arrayData, setArrayData]=useState([]);

    const removeGoalHandler=goalId=>{
      setArrayData(currentGoalsData=>{
        return currentGoalsData.filter((goal)=> goal.id!==goalId);
      });
    }

    const [isVisible, setIsVisible]=useState(false);
    
    
    const saveData= anythingApp=>{
      setArrayData(currentData=>
        [...currentData,{id:Math.random().toString(), text:anythingApp}]);
        setIsVisible(false);
    }

    return (
      <View style={styles.container}>
        <Button style={styles.buttonStyle} title='add new goal'onPress={()=>setIsVisible(true)}/>

       <GoalInput onCancel={cancelButton} onGoalAdded={saveData} visible={isVisible}/> 
       {/* onGoalAdded is the prop passed in GoalInput */}

        <FlatList keyExtractor={(item, index)=>item.id} 
        data={arrayData} renderItem={itemData =>
         <GoalList  onDelete={removeGoalHandler} id={itemData.item.id} title={itemData.item.text}/>
         }
        />



      </View>
    );
  }

  const styles = StyleSheet.create({
  
    buttonStyle:{
      padding:50,
      margin:5,      

    },
    container: {
      padding:50,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
