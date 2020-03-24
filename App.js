  import React, {useState} from 'react';
  import { StyleSheet, Text, View, Button, TextInput , ScrollView,FlatLIst} from 'react-native';

  export default function App() {
    const [defaultgoals , setGoals]=useState('');
    const [arrayOfGOals, setArrayOfGOals] = useState([]);

    const inputTextHandler = (enteredText)=>{ //function inputTextHandler(enteredText){} hunxa arko option & enteredText vanna khojeko tyo input field ko value
      setGoals(enteredText);
    }
    const addGoalHandler=()=>{ //what if i pass a parameter of enteredText?? from button,,, but it wont have any value
      //setArrayOfGOals([...arrayOfGOals, defaultgoals]);
      //else u can do this, i.e make a new array and pass it in anynomous function which is much better than the above
      setArrayOfGOals(currentGoals => [...currentGoals, defaultgoals]);
      // console.console.log('yes');
    }

    return (
      <ScrollView>
      <View >
        <View style={styles.overall}>
        <TextInput 
        placeholder= 'enter ur goals of this app' 
        style={styles.inputstyle}
        onChangeText={inputTextHandler} // dont write inputTextHnalder() coz it will execute it everytime.. this line is used to call input text handler when text inside it changes.
        value={defaultgoals} //setgoals bata default goals ma gako hunxa value tyo is designated to value
        />

        <Button title='ADD'onPress={addGoalHandler}/> 
        </View>
//new test
        <View>
          
          {arrayOfGOals.map((valuess) =>(
            <View style={styles.outputStyle}>
            <Text key={valuess}>{valuess}</Text></View>
          ))}
        </View>

      

  </View>
  </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    overall:{padding:80, flexDirection:'row', justifyContent:'space-between', alignItems:'center'},
    inputstyle:{width:'80%',   borderColor: 'black', borderWidth: 1, padding:10},
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    outputStyle:{
      padding:10,
      marginVertical:5,
      backgroundColor:'#ccc',
      borderColor:'black',
      borderWidth:1
    }
  });


