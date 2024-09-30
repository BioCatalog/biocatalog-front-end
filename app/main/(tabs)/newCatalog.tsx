import { Button, ButtonText } from "@/components/ui/button";
import { StyleSheet, Text, View} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Login() {
    useEffect(() => { router.replace('./catalog/new') }, []);

    return (        
        <View style={style.container}>
            <Button><ButtonText>Primeiro botão</ButtonText></Button>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    }
})
