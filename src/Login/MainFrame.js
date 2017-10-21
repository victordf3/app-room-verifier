import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Button, Alert, Image, TextInput, TouchableOpacity } from 'react-native';
import {  } from 'react-native-button'

const botaoLogin = () => {
    Alert.alert('Fazendo login...');
};

const botaoRecuperarSenha = () => {
    Alert.alert('Entre em contato com o SAE da instituição.');
};

//const IconSenha = require("../imgs/login_lock.png");
//const IconLogin = require("../imgs/login_person.png");

class Login extends React.Component {
    render() {
        return (
            <View>
                <View alignItems= 'center'>
                    <Image source={require('../Imagens/logo.jpg')} style={style.logo}/>
                </View>
                <View textAlign='center'>
                    <TextInput placeholder="Número da Matricula" autoFocus={true}/>
                    <TextInput placeholder="Senha" secureTextEntry={true}/>
                </View>
                <View alignItems="center">
                    <Button title="ENTRAR" color="#A52A2A" onPress={botaoLogin} />
                </View>
                <TouchableOpacity onPress={botaoRecuperarSenha}>
                    <Text style={style.esqueciSenha}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

export default connect(state => state)(Login);

const style = StyleSheet.create({
    logo:{
        width: 300,
        height: 150,
        margin: 45,
    },
    esqueciSenha:{
        marginTop: 20,
        color: '#1E90FF',
        textAlign: 'center',
        paddingRight: 5
    }

})