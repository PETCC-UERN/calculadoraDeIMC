import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity,Image } from 'react-native';

export default function InputText(props) {

  return (
    <View>
        <Text style={styles.labelStyle}>{props.label}</Text>
        <View style={styles.intpuStyle}>
          <TextInput placeholder={props.label} onChangeText={props.setValue} keyboardType='number-pad'/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    labelStyle:{
        color: "#000",
        fontSize: 15
      },
      intpuStyle:{
        borderWidth: 2,
        borderColor: "#200"
      },


});
