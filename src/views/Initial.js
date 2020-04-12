import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import logo from '../assets/logo.png';

export default Initial = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo}></Image>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Já sou cadastrado</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar-me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF7EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    maxWidth: '65%',
    maxHeight: 250,
  },
  title: {
    color: '#444',
    fontSize: 24,
  },
  buttonsContainer: {
    height: 135,
    width: '100%',
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    width: '65%',
    backgroundColor: '#0E6473',
    marginTop: 10,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
