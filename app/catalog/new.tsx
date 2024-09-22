import { Button, ButtonText } from "@/components/ui/button";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Login() {
    return (
        
        <View style={style.container}>
            <Button><ButtonText>Quem leu é gay</ButtonText></Button>
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
