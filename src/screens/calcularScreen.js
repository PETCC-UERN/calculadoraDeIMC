import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity,Image } from 'react-native';
import InputText from '../components/InputText';

export default function CalcularScreen() {
  // let imc = 200;
  const [imc, setImc] =  useState()
  const [altura, setAltura] =  useState(1.8)
  const [peso, setPeso] =  useState(75)
  const ery = "salve"


  const calcular = () => {
    setImc((peso/(altura*altura)).toFixed(2))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Calcular IMC</Text>
      <InputText setValue={setAltura} label="Altura"/>
      <InputText setValue={setPeso} label="Peso"/>

      <TouchableOpacity onPress={calcular} style={styles.buttonStyle}>
        <Text style={styles.textbuttonStyle}>Calcular</Text>
      </TouchableOpacity> 
      <View>
        <Text style={styles.valueStyle}>valor: {imc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle:{
    backgroundColor: "blue",
    padding: 10,
  },
  textbuttonStyle:{
  
    color: "white"
    
  },
  titleApp:{
    fontSize: 30
  },
  
  valueStyle:{
    fontSize: 30,
    color: "red"
  }
  


});
