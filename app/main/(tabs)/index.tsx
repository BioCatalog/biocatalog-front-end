import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
    const [data, setData] = useState<string[]>([]);

    return (
        <View style={style.container}>
            <Text>Home</Text>
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
