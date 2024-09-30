import { StyleSheet, Text, View } from "react-native";

export default function Catalog() {
    return (
        <View style={style.container}>
            <Text>Catalogos</Text>
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