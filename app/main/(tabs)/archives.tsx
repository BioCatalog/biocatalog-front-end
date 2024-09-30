import { StyleSheet, Text, View } from "react-native";

export default function MyCatalog() {
    return (
        <View style={style.container}>
            <Text>Meu Catalogo</Text>
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