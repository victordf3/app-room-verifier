import React, { Component } from "react";
import { AsyncStorage, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import FirebaseDatabase from "./FirebaseDatabase";

export default class AulasScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      aulas: [],
      aulaAtual: {}
    };
  }

  componentDidMount() {
    AsyncStorage.getItem("usuario")
      .then((usuario) => {
        let aluno = JSON.parse(usuario);
        let ref = FirebaseDatabase.database().ref("aulas");
        ref.once("value").then((snapshot) => {
          let aulas = snapshot.val();
          Object.keys(aulas).forEach((key) => {
            let aula = aulas[key];
            let data = `${aula.data}T23:59:59`;
            if (((new Date(data)) >= (new Date())) && (Object.keys(aula.alunos).includes(aluno.matricula))) {
              this.setState((prevState) => {
                let aulas = prevState.aulas.slice();
                aulas.push(aula);
                return {aulas: aulas, aulaAtual: aulas[0]};
              });
            }
          });
        });
      });
  }

  render() {
    if (JSON.stringify(this.state.aulaAtual) === JSON.stringify({})) {
      return null;
    }

    let partesData = this.state.aulaAtual.data ? this.state.aulaAtual.data.match(/(\d+)/g) : [];
    let dataDaAula = new Date(partesData[0], partesData[1] - 1, partesData[2]);
    data = dataDaAula.getDate() + "/" + (dataDaAula.getMonth() + 1) + "/" + dataDaAula.getFullYear();
    let diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let dataDeHoje = new Date();
    let diaDaSemana = (data === dataDeHoje.getDate() + "/" + (dataDeHoje.getMonth() + 1) + "/" + dataDeHoje.getFullYear()) ? "Hoje" : diasDaSemana[dataDaAula.getDay()];

    return (
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Image source={{uri: this.state.aulaAtual.imagem}} style={styles.image}/>
          <Text style={styles.date}>{diaDaSemana} - {data}</Text>
          <Text style={styles.paragraph}>{this.state.aulaAtual.sala}</Text>
          <Text style={styles.paragraph}>{this.state.aulaAtual.materia}</Text>
          <Text style={styles.paragraph}>Professor: {this.state.aulaAtual.professor}</Text>
          <Text style={styles.paragraph}>Horário: {this.state.aulaAtual.hora_inicio} hrs - {this.state.aulaAtual.hora_fim} hrs</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerButtonsContainer}>
            <TouchableOpacity style={styles.footerButton} onPress={() => this.voltarAula()}>
              <Icon name="arrow-left" size={20} color="#444444"/>
              <Text style={styles.footerButtonInner}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={() => this.aulaHoje()}>
              <Icon name="calendar" size={20} color="#444444"/>
              <Text style={styles.footerButtonInner}>Hoje</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerButton} onPress={() => this.avancarAula()}>
              <Icon name="arrow-right" size={20} color="#444444"/>
              <Text style={styles.footerButtonInner}>Avançar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  voltarAula() {
    let indiceAulaAtual = this.state.aulas.indexOf(this.state.aulaAtual);
    if (this.state.aulas[indiceAulaAtual - 1]) {
      this.setState({aulaAtual: this.state.aulas[indiceAulaAtual - 1]});
    }
  }

  avancarAula() {
    let indiceAulaAtual = this.state.aulas.indexOf(this.state.aulaAtual);
    if (this.state.aulas[indiceAulaAtual + 1]) {
      this.setState({aulaAtual: this.state.aulas[indiceAulaAtual + 1]});
    }
  }

  aulaHoje() {
    this.state.aulas.forEach((aula) => {
      let dataHoje = new Date();
      dataHoje = dataHoje.getDate() + "/" + (dataHoje.getMonth() + 1) + "/" + dataHoje.getFullYear();
      let partesData = aula.data.match(/(\d+)/g);
      let dataDaAula = new Date(partesData[0], partesData[1] - 1, partesData[2]);
      dataDaAula = dataDaAula.getDate() + "/" + (dataDaAula.getMonth() + 1) + "/" + dataDaAula.getFullYear();

      if (dataDaAula === dataHoje) {
        this.setState({aulaAtual: aula});
        return;
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContent: {
    backgroundColor: "#FFFFFF",
    flexGrow: 1,
    padding: 10
  },
  image: {
    height: 230,
    width: Dimensions.get("window").width - 20
  },
  date: {
    alignSelf: "stretch",
    backgroundColor: "#942939",
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    padding: 10,
    textAlign: "center"
  },
  paragraph: {
    marginTop: 10
  },
  footer: {
    backgroundColor: "#F8F8F8",
    height: 45
  },
  footerButtonsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  footerButton: {
    flex: 1,
    alignItems: "center"
  },
  footerButtonInner: {
    color: "#444444"
  }
});
