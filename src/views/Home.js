import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default Home = () => {
  const navigation = useNavigation();

  function navigateTo(destiny) {
    navigation.navigate(destiny);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigateTo('Initial');
            }}>
            <Text style={styles.buttonText}>{'<<'} Voltar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.buttonText}></Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EDF7EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
    maxHeight: 60,
    backgroundColor: 'rgb(248, 86, 73)',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  body: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#EDF7EF',
  },
  button: {
    flex: 1,
    width: 120,
    backgroundColor: '#FFF',
    marginTop: 10,
    marginLeft: 5,
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#444',
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
