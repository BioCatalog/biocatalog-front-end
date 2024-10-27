import StyledButton from "@/components/styled-button";
import StyledInput from "@/components/styled-input";
import { useAuth } from "@/context/auth";
import api from "@/helpers/axios";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, View, Text, ToastAndroid, Pressable } from "react-native";

export default function Login() {
    const auth = useAuth();

    return (
        <View style={style.container}>
            <Image style={style.logoImage} source={require('../assets/logo/logoImage.png')} />
            <View style={style.containerFieds}>
                <StyledInput label="Email" type="text" onChangeText={(data) => { auth.setUser({ ...auth.user, email: data }) }} />
                <StyledInput label="Senha" type="password" onChangeText={(data) => { auth.setUser({ ...auth.user, password: data }) }} />
            </View>
            <StyledButton onClick={auth.handleLogin} text="Entrar" color="#509044" />
            <Text style={{ marginTop: 15 }} onPress={() => { router.replace('/userRegister') }}>
                Cadastre-se <Text style={{ fontWeight: "bold", color: "green" }}>AQUI!</Text>
            </Text>
            <View style={{ marginTop: 40 }}>
                <Text onPress={() => { router.replace('/main/(tabs)/'); }}>
                    Ou continuar sem conta
                </Text>
            </View>
        </View >
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    containerFieds: {
        width: '100%',
        margin: 20,
        padding: 20
    },
    logoImage: {
        height: 150,
        aspectRatio: 1
    }
})