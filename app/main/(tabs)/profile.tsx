import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    return (
        <View style={style.container}>
            <Text>Meu Perfil</Text>
            <Button style={{ backgroundColor: '#A41718' }} onPress={() => router.replace('/')}><ButtonText>Sair</ButtonText></Button>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    }
})