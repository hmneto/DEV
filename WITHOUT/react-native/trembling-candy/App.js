import React, {useState,useEffect} from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard
} from "react-native";

import TelaTeste from "./components/TelaTeste";

export default function App() {
  const [opacity] = useState(new Animated.Value(0))
  const[offset] = useState(new Animated.ValueXY({x:0,y:95}))
  const [logo] = useState(new Animated.ValueXY({x:130,y:155}))
  useEffect(()=>{
    keyBoardDidShowListener = Keyboard.addListener('keyboardDidShow',keyBoardDidShow)

    keyBoardDidHideListener = Keyboard.addListener('keyboardDidHide',keybouardDidHide)

    Animated.parallel([
      Animated.spring(offset.y,{toValue:0,speed:4,bounciness:20,useNativeDriver: false}),
      Animated.timing(opacity,{ toValue:1,duration:200,useNativeDriver: false})
    ]).start()
    
  },[])


  function keyBoardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 55,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y,{
        toValue:65,
        duration:100,
        useNativeDriver: false
      })
    ]).start()
  }  

  function keybouardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 130,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y,{
        toValue:155,
        duration:100,
        useNativeDriver: false
      })
    ]).start()
  }  

  return (
    <KeyboardAvoidingView style={styles.container}>
        {/* <TelaTeste/> */}
      <View style={styles.logo}>
        <Animated.Image style={{width:logo.x,height:logo.y}} source={require("./assets/favicon.png")} />
      </View>

      <Animated.View style={[styles.containerInput,{
        opacity:opacity,
        transform:[
          {translateY: offset.y}
        ]
      }]}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar Conta gratuita</Text>
        </TouchableOpacity>

      </Animated.View>

    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#191919'
  },
  logo:{
    flex:1,
    justifyContent:'center',
  },
  containerInput:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50
  },
  input:{
    padding:10,
    backgroundColor:'#fff',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7
  },
  btnSubmit:{
    backgroundColor:'#35AAFF',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7 
  },
  submitText:{
    color:'#FFF',
    fontSize:18
  },
  btnRegister:{
    marginTop:10
  },
  registerText:{
    color:'#FFF'
  }
});
