import StyledButton from "@/components/styled-button";
import StyledInput from "@/components/styled-input";
import { useCatalogDatabase } from "@/database/useCatalogDatabase";
import { router } from "expo-router";
import { Image, StyleSheet, View, Text } from "react-native";

export default function Login() {
    function handleLogin() {
        router.replace('/main');
    }

    useCatalogDatabase().getCatalogImage();

    return (
        <View style={style.container}>
            <Image style={style.logoImage} source={require('../assets/logo/logoImage.png')} />
            <View style={style.containerFieds}>
                <StyledInput label="Email" type="text" />
                <StyledInput label="Senha" type="password" />
            </View>
            <StyledButton onClick={handleLogin} text="Entrar" color="#509044" />
            <Text style={{marginTop: 15}} onPress={() => { router.replace('/userRegister') }}>
                Ou Cadastre-se <Text style={{fontWeight: "bold", color: "green"}}>AQUI!</Text></Text>
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