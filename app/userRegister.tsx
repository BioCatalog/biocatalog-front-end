import StyledButton from "@/components/styled-button";
import StyledInput from "@/components/styled-input";
import { router } from "expo-router";
import { Image, StyleSheet, View, Text } from "react-native";
import { useAuth } from "@/context/auth";
import AuthScreen from "@/components/auth-screen";

export default function UserRegister() {
    const auth = useAuth();

    return (
        <AuthScreen>
            <Text style={styles.textRegister}>Cadastre-se no BioCatalog e comece a registrar os espécimes encontrados.</Text>
            <View style={styles.containerFieds}>

                <Text style={styles.textRegister}>Nome:</Text>
                <StyledInput label="Nome completo" type="text"
                    defaultValue={auth.userRegister.name} onChangeText={(data) => auth.setUserRegister({ ...auth.userRegister, name: data })} />

                <Text style={styles.textRegister}>Formação:</Text>
                <StyledInput label="Formação" type="text"
                    defaultValue={auth.userRegister.form} onChangeText={(data) => auth.setUserRegister({ ...auth.userRegister, form: data })} />

                <Text style={styles.textRegister}>E-mail:</Text>
                <StyledInput label="Email" type="text"
                    defaultValue={auth.userRegister.email} onChangeText={(data) => auth.setUserRegister({ ...auth.userRegister, email: data })} />

                <Text style={styles.textRegister}>Senha:</Text>
                <StyledInput label="Senha" type="password"
                    defaultValue={auth.userRegister.password} onChangeText={(data) => auth.setUserRegister({ ...auth.userRegister, password: data })} />

            </View>
            <StyledButton onClick={auth.handleRegister} text="Registrar" color="#509044" />

            <Text style={{ marginTop: 15 }} onPress={() => { router.replace('/') }}>
                Já tem uma conta? Faça Login <Text style={{ fontWeight: "bold", color: "green" }}>AQUI!</Text></Text>
        </AuthScreen>
    )
}

const styles = StyleSheet.create({
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
});
