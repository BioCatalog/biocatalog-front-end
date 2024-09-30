import { Button, ButtonText } from "@/components/ui/button";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Login() {
    return (
        <View style={style.container}>
            <Button onPress={() => { router.replace('/main') }}><ButtonText>Primeiro Botao</ButtonText></Button>
        </View >
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    }
})