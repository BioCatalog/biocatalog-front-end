import { Button } from "@/components/ui/button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import * as FileSystem from 'expo-file-system'
import PhotoBox from "@/components/catalog/addBoxes";

export default function RegistrarEspecie() {
    const [photo, setPhoto] = useState<string[]>([])

    const carregaFoto = async () => {
        let imageFound = true;
        let imageIndex = 0

        while (imageFound) {
            const photoFileName = FileSystem.documentDirectory + `photo${imageIndex}.jpg`;

            const file = await FileSystem.getInfoAsync(photoFileName)
                .then((res) => {
                    if (res.exists) {
                        setPhoto(photo => [...photo, res.uri]);
                        imageIndex++;
                    }
                }).catch((e) => {
                    imageFound = false;
                });
        }
    }

    useEffect(() => {
        carregaFoto()
    }, [])

    return (
        <View style={style.container}>
            <StatusBar hidden={true} />
            <FontAwesome size={30} name="arrow-left" onPress={() => { router.navigate('/main') }} />
            
            <PhotoBox photosURL={photo} />
        
            <View style={{flex: 1}}>

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
    }
});
