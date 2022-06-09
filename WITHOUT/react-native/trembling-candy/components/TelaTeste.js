import React, { Component } from 'react';
import { View, StyleSheet, Button, Alert } from "react-native";
import Axios from 'axios'

function teste(aaa) {
    const api = Axios.create({
      //baseURL: "http://10.0.2.2:5000",
      baseURL: "https://testephp111.herokuapp.com",
    });
  
    api.get("/").then((x) => Alert.alert(x.data));
  }
  
  export default function App() {
    return (
      <View style={styles.container}>
        <Button title="ok" onPress={() => teste("ok")}></Button>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
  });
  