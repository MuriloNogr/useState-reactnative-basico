import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [fabricante, setFabricante] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState("");

  function cadastrarCarro() {
    console.log(fabricante, modelo, preco);
  }
  const handleSubmit = () => {
    cadastrarCarro();
    alert('Carro cadastrado com sucesso! \nFabricante: ' + fabricante + '\nModelo: ' + modelo + '\nPreço: ' + preco);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/27527416_7317976.svg')} style={{width: 305, height: 159}} />
        <Text style={styles.titleText}>CARROS.COM</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.text}>Fabricante:</Text>
          <TextInput value={fabricante} onChangeText={setFabricante} style= {styles.textInput}></TextInput>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Modelo:</Text>
          <TextInput value={modelo} onChangeText={setModelo} style= {styles.textInput}></TextInput>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Preço:</Text>
          <TextInput value={preco} onChangeText={setPreco} style= {styles.textInput}></TextInput>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          <Text style={styles.btnText}>CADASTRAR/SALVAR</Text>
        </TouchableOpacity>
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
    width: '100%',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    paddingHorizontal: 20,
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    height: '70%',
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#ff8c00',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '15%',
    paddingHorizontal: 10,
  },
  textInput: {
    width: '30%',
    height: '25%',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  text: {
    width: '15%',
    marginRight: 10,
    fontSize: 20,
    color: 'white',
  },
  btn: {
    width: '45%',
    height: '7%',
    borderRadius: 15,
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#ff8c00',
  }
});
