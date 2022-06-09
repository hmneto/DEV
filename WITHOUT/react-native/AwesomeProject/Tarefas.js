import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';
// import { Ionicons } from '@expo/vector-icons'
import TaskList from './TaskList';

import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const [task, setTask] = useState([]);

  const [open, openSet] = useState(false);
  const [input, setInput] = useState('');

  function handleAdd() {
    if (input == '') return;
    const data = {
      key: input,
      task: input,
    };

    setTask([...task, data]);
    openSet(false);
    setInput('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>Minhas tarefas</Text>
      </View>

      {/* Aqui vai a lista */}

      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={item => String(item.key)}
        renderItem={({item}) => <TaskList data={item} />}
      />

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 30,
                  marginLeft: 5,
                  marginRight: 5,
                  //color:"#FFF"
                }}
                onPress={() => openSet(false)}>
                Voltar
              </Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Nova Tarefa</Text>
          </View>

          <Animatable.View
            style={styles.modalBody}
            animation="fadeInUp"
            useNativeDriver>
            <TextInput
              multiline={true}
              placeholderTextColor={'#747474'}
              autoCorrect={false}
              value={input}
              onChangeText={texto => setInput(texto)}
              style={styles.input}
              placeholder="O que precisa fazer hoje"
            />

            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
              <Text style={styles.handleAddText}>Cadastrar</Text>
            </TouchableOpacity>
          </Animatable.View>
        </SafeAreaView>
      </Modal>

      <AnimatedBtn
        style={styles.fab}
        animation="bounceInUp"
        useNativeDriver
        duration={1500}
        onPress={() => openSet(true)}>
        {/* <Ionicons name="ios-add" size={35} color="#FFF"/> */}
        <Text style={styles.plusButton}>+</Text>
      </AnimatedBtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31',
  },
  content: {},
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.9,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
  plusButton: {
    fontSize: 35,
    color: '#FFF',
  },
  modal: {
    flex: 1,
    backgroundColor: '#171d31',
  },
  modalHeader: {
    marginTop: 20,
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalTitle: {
    marginLeft: 15,
    fontSize: 23,
    color: '#FFF',
  },
  modalBody: {
    marginTop: 15,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#FFF',
    padding: 9,
    height: 85,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  handleAdd: {
    backgroundColor: '#FFF',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },
  handleAddText: {
    fontSize: 20,
  },
});
