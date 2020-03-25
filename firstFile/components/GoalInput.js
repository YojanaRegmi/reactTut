import React, {useState} from 'react';
import {View,TextInput, StyleSheet, Button} from 'react-native';


const GoalInput = prop =>{
    const [anything, setAnything]=useState('');

    const addValue= (enteredText)=>{
        setAnything(enteredText);
      }
  
    return(
        <View style={styles.firstStyle}>
        <TextInput 
        placeholder='enter anything to be displayed'
        onChangeText={addValue}
        />
        <Button title='add' onPress={prop.onGoalAdded.bind(this,anything)}/>
        {/* accessing the onGoalAdded from prop that was sent into app.js */}
        {/* prop isnot inside bracket else that will be the passed value. */}
        {/* bind function is used to pass the input data into app.js since app.js doesnt have 'anything' */}
        </View>
    );

};
 const styles=StyleSheet.create({
    firstStyle:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    }  
 });

export default GoalInput;