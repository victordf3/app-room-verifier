import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SobreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Aplicativo desenvolvido para o Centro Universitário Católica de Santa Catarina pelo acadêmico do curso de Bacharelado em Sistemas de Informação Victor Doubrawa Fabro e este é seu tema de Conclusão de Curso, com o intuito de facilitar a consulta de salas e disciplinas dos estudantes e torna-se efetivo e ágil a informação sobre mudanças.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  text: {
    margin: 20
  }
});
