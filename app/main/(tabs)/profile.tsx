import StyledConfirmation from "@/components/styled-confirmation";
import { Button, ButtonText } from "@/components/ui/button";
import { useAuth } from "@/context/auth";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    const auth = useAuth();

    return (
        <View style={style.container}>
            <View style={style.profileFrame}>
                <View style={style.profilePhoto}><Text>Foto de perfil</Text></View>
            </View>
            <Text style={style.title}>Olá, {auth.userInfo.name}</Text>
            <Text style={style.present1}>Formação:</Text>
            <Text style={style.present2}>{auth.userInfo.form}</Text>
            <Text style={style.present1}>E-mail:</Text>
            <Text style={style.present2}>{auth.userInfo.email}</Text>
            <View style={{ marginTop: 20, width: '75%' }}>
                {
                    auth.userInfo.email == 'local' ?
                        <StyledConfirmation
                            firClick={() => { router.navigate("/userRegister") }} firLabel="Registrar" firColor="green"
                            secClick={() => { router.navigate("/") }} secLabel="Login" secColor="blue" />
                        :
                        <>
                            <Button style={{ backgroundColor: '#297d28' }} onPress={() => { router.replace('/main/content/editProfile/') }}><ButtonText>Editar</ButtonText></Button>
                            <Button style={{ backgroundColor: '#A41718' }} onPress={auth.handleLogout}><ButtonText>Sair</ButtonText></Button>
                        </>
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    present1: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    present2: {
        fontSize: 15
    },
    profileFrame: {
        width: 80,
        height: 80,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
    },
    profilePhoto: {
        width: 75,
        height: 75,
        backgroundColor: "green"
    }
})