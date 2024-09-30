import { Button } from "@/components/ui/button"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { router } from "expo-router"
import { ScrollView, View, StyleSheet, Image } from "react-native"
import { Dimensions } from 'react-native';

interface PhotoBoxProps {
    photosURL: string[]
}

export default function PhotoBox({ photosURL }: PhotoBoxProps) {
    return (
        <ScrollView
            style={style.scrollView}
            contentContainerStyle={style.imagesView}>

            <Button style={style.box} onPress={() => { router.navigate('/main/content/catalog/newImage') }}>
                <FontAwesome size={50} name="plus-square" />
            </Button>

            {
                photosURL && photosURL.map((photoUrl, index) => (
                    <View key={index} style={style.box}>
                        <Image source={{ uri: photoUrl }} style={style.image} />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const screenHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },

    box: {
        width: '48%',
        aspectRatio: 1,
        backgroundColor: '#65db4d',
        borderRadius: 10,
        marginBottom: 10
    },

    imagesView: {
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: 'space-between',
        padding: 10
    },

    scrollView: {
        height: screenHeight/2,
        backgroundColor: 'gray',
        borderRadius: 15,
    }
})