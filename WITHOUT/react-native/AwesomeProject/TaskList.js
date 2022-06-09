import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'


export default function TaskList({data}) {
  return (
    <Animatable.View
    animation='bounceIn'
    useNativeDriver
    style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.plusButton}>V</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.task}>{data.task}</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      margin:8,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#FFF',
      borderRadius:5,
      padding:7,
      elevation:7,
      shadowColor:'#000',
      shadowOpacity:0.2,
      shadowOffset:{
          width:1,
          height:3,
      }
  },
  plusButton: {
    fontSize: 35,
    color: '#000',
  },
  task:{
      color:"#121212",
      fontSize:20,
      paddingLeft:8,
      paddingRight:20
  }
});
