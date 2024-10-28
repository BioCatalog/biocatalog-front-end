import StyledConfirmation from "@/components/styled-confirmation";
import { Button, ButtonText } from "@/components/ui/button";
import { useAuth } from "@/context/auth";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    const auth = useAuth();

    return (
        <View style={style.container}>
            <Text>Olá, {auth.userInfo.name}</Text>
            <View style={{marginTop: 20, width: '75%'}}>
                {
                    auth.userInfo.email == 'local' ?
                        <StyledConfirmation
                            firClick={() => { router.navigate("/userRegister") }} firLabel="Registrar" firColor="green"
                            secClick={() => { router.navigate("/") }} secLabel="Login" secColor="blue" />
                        :
                        <Button style={{ backgroundColor: '#A41718' }} onPress={auth.handleLogout}><ButtonText>Sair</ButtonText></Button>
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})