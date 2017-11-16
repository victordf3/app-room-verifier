import React, { Component } from "react";
import { Alert, AsyncStorage, Button, Dimensions, Image, StyleSheet, TextInput, View } from "react-native";
import FirebaseDatabase from "./FirebaseDatabase";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login",
    drawerLabel: () => null
  };

  constructor(props) {
    super(props);
    this.state = {matricula: ""};
  }

  onPressButton() {
    let matricula = this.state.matricula.trim();
    if (matricula !== "") {
      let ref = FirebaseDatabase.database().ref(`alunos/${matricula}`);

      ref.once("value").then((snapshot) => {
        if (snapshot.val()) {
          let aluno = snapshot.val();
          aluno.matricula = matricula;

          AsyncStorage.setItem("usuario", JSON.stringify(aluno), () => this.props.navigation.navigate("Aulas"));
        } else {
          Alert.alert(`Usuário não encontrado com a matrícula "${this.state.matricula}".`);
        }
      });
    } else {
      Alert.alert("Informe uma matrícula");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./images/logo.jpg")} style={styles.logo}/>
        <TextInput placeholder="Número da Matrícula" style={styles.input} onChangeText={(text) => this.setState({matricula: text})}/>
        <View style={styles.buttonContainer}>
          <Button title="Verificar Aulas" color="#942939" onPress={() => this.onPressButton()}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    height: 225,
    marginLeft: 10,
    marginRight: 10,
    width: Dimensions.get("window").width - 20
  },
  input: {
    alignSelf: "stretch",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  buttonContainer: {
    alignSelf: "stretch",
    marginLeft: 10,
    marginRight: 10
  }
});
