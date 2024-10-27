import { Button, ButtonText } from "@/components/ui/button";
import { useAuth } from "@/context/auth";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    const data = useAuth();

    return (
        <View style={style.container}>
            <Text>Olá, {data.userInfo.name}</Text>
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