import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const GoalList = prop=>{
    return(
    <View style={styles.listStyle}>
        <Text>{prop.title}</Text>
        {
            // u can use children and title too u can use but in title, u can use GoalList as a <>. 
        }
    </View>
    );
};
const styles= StyleSheet.create({
    listStyle:{
      backgroundColor:'#ccc',
      borderColor:'black',
      borderWidth:1,
      padding:10,
      margin:5,
    }
});
export default GoalList;