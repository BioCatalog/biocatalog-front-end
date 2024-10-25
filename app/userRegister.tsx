import StyledButton from "@/components/styled-button";
import StyledInput from "@/components/styled-input";
import { router } from "expo-router";
import { Image, StyleSheet, View, Text, Alert } from "react-native";
import { useState } from "react";
import api from "@/helpers/axios";

export default function UserRegister() {
    const [name, setName] = useState('');
    const [form, setForm] = useState('');
    const [email, setEmail] = useState('');
    const [passw, setPassw] = useState('');

    async function handleRegister() {
        try {
            const response = await api.post('/register', { name, form, email, passw });
            
            if (response.status == 201) {
                Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
                router.replace('/main/(tabs)/profile');
            } else {
                Alert.alert('Erro', 'Falha ao registrar usuário.');
            }
        } catch (e) {
            Alert.alert('Erro', 'Erro ao registrar usuário: ')//+ e.message
        }

    }

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../assets/logo/logoImage.png')} />
            <Text style={styles.textRegister}>Cadastre-se no BioCatalog e comece a registrar os espécimes encontrados.</Text>
            <View style={styles.containerFieds}>

                <Text style={styles.textRegister}>Nome:</Text>
                <StyledInput label="Nome completo" type="text" 
                defaultValue={name} onChangeText={setName} />

                <Text style={styles.textRegister}>Formação:</Text>
                <StyledInput label="Formação" type="text" 
                defaultValue={form} onChangeText={setForm} />

                <Text style={styles.textRegister}>E-mail:</Text>
                <StyledInput label="Email" type="text" 
                defaultValue={email} onChangeText={setEmail} />

                <Text style={styles.textRegister}>Senha:</Text>
                <StyledInput label="Senha" type="password" 
                defaultValue={passw} onChangeText={setPassw} />

            </View>
            <StyledButton onClick={handleRegister} text="Registrar" color="#509044" />

            <Text style={{ marginTop: 15 }} onPress={() => { router.replace('/') }}>
                Já tem uma conta? Faça Login <Text style={{ fontWeight: "bold", color: "green" }}>AQUI!</Text></Text>
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