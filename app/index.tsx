import StyledButton from "@/components/styled-button";
import StyledInput from "@/components/styled-input";
import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function Login() {
    function handleLogin() {
        router.replace('/main');
    }

    return (
        <View style={style.container}>
            <Image style={style.logoImage} source={require('../assets/logo/logoImage.png')} />
            <View style={style.containerFieds}>
                <StyledInput label="Email" type="text" />
                <StyledInput label="Senha" type="password" />
            </View>
            <StyledButton onClick={handleLogin} text="Entrar" color="#509044" />
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