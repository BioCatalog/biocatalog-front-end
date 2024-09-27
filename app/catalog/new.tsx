import { Button, ButtonText } from "@/components/ui/button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Login() {
    return (
        <View style={style.container}>
            <StatusBar hidden={true} />
            <Button onPress={() => { router.replace('/main') }} style={style.buttonBack}><ButtonText>Voltar</ButtonText></Button>
            <View style={style.imagesView}>
                <Button onPress={() => { router.replace('./newImage') }} style={style.buttonAddImage}>
                    <FontAwesome size={50} name="plus-square" />
                </Button>
                <View style={style.image}></View>
                <View style={style.image}></View>
                <View style={style.image}></View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1
    },
    buttonBack: {
        width: 100
    },
    buttonAddImage: {
        width: 175,
        height: 175,
        margin: 5,
        backgroundColor: '#65db4d',
        borderRadius: 15
    },
    image: {
        width: 175,
        height: 175,
        margin: 5,
        backgroundColor: '#489638',
        borderRadius: 15
    },
    imagesView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
})
