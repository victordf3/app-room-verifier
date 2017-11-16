import React, { Component } from "react";
import { Button, Text } from "react-native";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen";
import AulasScreen from "./AulasScreen";
import PerfilScreen from "./PerfilScreen";
import SobreScreen from "./SobreScreen";

const AulasStackNavigator = StackNavigator(
  {AulasScreen: {screen: AulasScreen}},
  {
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Aulas",
      headerMode: "screen",
      headerTitle: "Aulas",
      headerLeft: (<Text style={{marginLeft: 10}} onPress={() => navigation.navigate("DrawerToggle")}>☰</Text>),
      initialRouteName: "AulasScreen"
    })
  }
);

const PerfilStackNavigator = StackNavigator(
  {PerfilScreen: {screen: PerfilScreen}},
  {
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Perfil",
      headerMode: "screen",
      headerTitle: "Perfil",
      headerLeft: (<Text style={{marginLeft: 10}} onPress={() => navigation.navigate("DrawerToggle")}>☰</Text>),
      initialRouteName: "PerfilScreen"
    })
  }
);

const SobreStackNavigator = StackNavigator(
  {SobreScreen: {screen: SobreScreen}},
  {
    navigationOptions: ({ navigation }) => ({
      drawerLabel: "Sobre",
      headerMode: "screen",
      headerTitle: "Sobre",
      headerLeft: (<Text style={{marginLeft: 10}} onPress={() => navigation.navigate("DrawerToggle")}>☰</Text>),
      initialRouteName: "SobreScreen"
    })
  }
);

const AulasApp = DrawerNavigator({
  Login: {screen: LoginScreen},
  Aulas: {
    name: "AulasStackNavigator",
    screen: AulasStackNavigator
  },
  Perfil: {
    name: "PerfilStackNavigator",
    screen: PerfilStackNavigator
  },
  Sobre: {
    name: "SobreStackNavigator",
    screen: SobreStackNavigator
  }
});

export default class App extends Component {
  render() {
    return <AulasApp/>
  }
}
