import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import MaskInput from 'react-native-mask-input';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}><FontAwesome name="reorder" size={40} color="#00ADB5" style={styles.reorder}/></View>
      <Text style={styles.text}>Data</Text>
      <TextInput placeholder='DD/MM/YYYY' style={styles.input} />
      <Text style={styles.texto}>Horário</Text>
      <TextInput placeholder='hh:mm' style={styles.input} />
      <Text style={styles.texto}>Professor</Text>
      <TextInput placeholder='nome do professor' style={styles.input} />
      <Text style={styles.texto}>Observação</Text>
      <TextInput placeholder='Mensagem para o responsável' style={styles.inputObservation} />
      <View style={styles.button}>
        <TouchableOpacity style={styles.x}><Feather name="x" size={105} color="white"/></TouchableOpacity>
        <TouchableOpacity style={styles.v}><Feather name="check" size={105} color="white" /></TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 16,
    paddingLeft: 10,
  },
  texto: {
    paddingLeft: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    justifyContent: 'flex-start',
    textAlign: 'left',
    color: '#707070',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    borderColor: '#00ADB5',
    backgroundColor: '#D9D9D9',
  },
  inputObservation: {
    height: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    borderColor: '#00ADB5',
    backgroundColor: '#D9D9D9',
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    height: 300,
    width: "100%",
    marginTop: 60,
  },
  x: {
    backgroundColor: '#B50021',
    height: "35%",
    width: "24%",
    borderRadius: 26,
    marginRight: 45,
  },
  v: {
    backgroundColor: '#00ADB5',
    height: "35%",
    width: "24%",
    borderRadius: 28,
  },
  header: {
    backgroundColor: '#393E46',
    height: "11%",
  },
  reorder: {
    marginTop: 50,
    marginLeft: 10,
  }
});