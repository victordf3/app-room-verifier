import React, { Component } from "react";
import { Alert, AsyncStorage, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import FirebaseDatabase from "./FirebaseDatabase";

export default class PerfilScreen extends React.Component {
  constructor() {
    super();
    this.state = {usuario: {}};
  }

  componentDidMount() {
    AsyncStorage.getItem("usuario")
      .then((usuario) => {
        this.setState({usuario: JSON.parse(usuario)}, () => {
          let ref = FirebaseDatabase.database().ref(`cursos/${this.state.usuario.curso}/nome`);

          ref.once("value").then((snapshot) => {
            let novoUsuario = this.state.usuario;
            novoUsuario.curso = snapshot.val();
            this.setState(novoUsuario);
          });
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./images/logo.jpg")} style={styles.logo}/>
        <Text style={styles.nome}>{this.state.usuario.nome}</Text>
        <Text style={styles.texto}>Matrícula: {this.state.usuario.matricula}</Text>
        <Text style={styles.texto}>Curso: {this.state.usuario.curso}</Text>
        <Text style={styles.texto}>Fase: {this.state.usuario.fase}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  logo: {
    height: 225,
    marginLeft: 10,
    marginRight: 10,
    width: Dimensions.get("window").width - 20
  },
  nome: {
    alignSelf: "stretch",
    backgroundColor: "#942939",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
    textAlign: "center"
  },
  texto: {
    margin: 10,
    textAlign: "center"
  }
});
