import { Button } from "@/components/ui/button"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { router } from "expo-router"
import { ScrollView, View, StyleSheet, Image } from "react-native"

interface PhotoBoxProps {
    photosURL: string[]
}

export default function PhotoBox({ photosURL }: PhotoBoxProps) {
    return (
        <ScrollView
            style={style.scrollView}
            contentContainerStyle={style.imagesView}>
            <Button onPress={() => { router.navigate('/content/catalog/newImage') }} style={style.buttonAddImage}>
                <FontAwesome size={50} name="plus-square" />
            </Button>
            {
                photosURL && photosURL.map((photoUrl, index) => (
                    <View key={index}><Image source={{ uri: photoUrl }} style={style.image} /></View>
                ))
            }
        </ScrollView>
    )
}

const style = StyleSheet.create({
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },

    scrollView: {
        flex: 2
    }
})