import React, {useState} from 'react';
import {View,TextInput, StyleSheet, Button,Modal} from 'react-native';


const GoalInput = prop =>{


    const buttonPressed=()=>{
        prop.onGoalAdded(anything);
        setAnything('');


    }
    const [anything, setAnything]=useState('');

    const addValue= (enteredText)=>{
        setAnything(enteredText);
      }
    

  
    return(
        <Modal visible={prop.visible} animationType='slide'>
        <View style={styles.firstStyle}>
        <TextInput 
        style={styles.input}
        placeholder='enter anything to be displayed'
        onChangeText={addValue}
        />
        <View style={styles.buttonStyle}>
            <View style={styles.button}>
        <Button title='ADD' onPress={buttonPressed}/>
        </View>
        <View style={styles.buttonStyle}>
        <Button title='CANCEL' color='red' onPress={prop.onCancel}/>
        </View>
        </View>
        {/* accessing the onGoalAdded from prop that was sent into app.js */}
        {/* prop isnot inside bracket else that will be the passed value. */}
        {/* bind function is used to pass the input data into app.js since app.js doesnt have 'anything' */}
        </View>
        </Modal>
    );

};
 const styles=StyleSheet.create({
     button:{
         width:'40%'
     },
     buttonStyle:{
         width:'60%',
         padding:10,
         flexDirection:'row',
         justifyContent:'space-around',
         alignItems:'center',
     },
    firstStyle:{
        flex:1,
        padding:10,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        width:'80%',
        borderWidth:1,
        borderColor:'black',
        marginBottom:10,
        padding:10,

    },
 });

export default GoalInput;