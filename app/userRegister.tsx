import StyledButton from "@/components/styled-button";
import StyledInput from "@/components/styled-input";
import { router } from "expo-router";
import { Image, StyleSheet, View, Text } from "react-native";

export default function UserRegister() {
    function handleRegister() {
        router.replace('/main/(tabs)');
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../assets/logo/logoImage.png')} />
            <Text style={styles.textRegister}>Cadastre-se no BioCatalog e comece a registrar os espécimes encontrados.</Text>
            <View style={styles.containerFieds}>
                <StyledInput label="Nome completo" type="text" />
                <StyledInput label="Formação" type="text" />
                <StyledInput label="Email" type="text" />
                <StyledInput label="Senha" type="password" />
            </View>
            <StyledButton onClick={handleRegister} text="Registrar" color="#509044" />
            
            <Text style={{marginTop: 15}} onPress={() => { router.replace('/') }}>
                Já tem uma conta? Faça Login <Text style={{fontWeight: "bold", color: "green"}}>AQUI!</Text></Text>
        </View >
    )
}

const styles = StyleSheet.create({
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
    },
    textRegister: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold"
    }
})