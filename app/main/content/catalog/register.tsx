import { router } from "expo-router";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FileSystem from 'expo-file-system'
import PhotoBox from "@/components/catalog/add-boxes";
import StyledButton from "@/components/styled-button";
import CatalogInputs from "@/components/catalog/inputs";
import { ScrollView } from "react-native";

export default function RegisterSpecie() {
    const [photo, setPhoto] = useState<string[]>([]);
    let photosQnt = 0;

    const loadPhotos = async (index: number) => {
        const photoFileName = FileSystem.documentDirectory + `photo${index}.jpg`;

        const file = await FileSystem.getInfoAsync(photoFileName)
            .then((res) => {
                if (res.exists) {
                    setPhoto(photo => [...photo, res.uri]);
                    loadPhotos(index + 1);
                    photosQnt = index;
                }
            }).catch((e) => {

            });
    }

    useEffect(() => {
        setPhoto([]);
        photosQnt = 0;
        loadPhotos(0);
    }, []);

    const clearPhotos = async () => {
        photo.map(async (content) => {
            const file = await FileSystem.deleteAsync(content);
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <PhotoBox photosURL={photo} />
                <CatalogInputs />
            </ScrollView>

            <View style={styles.optionsView}>
                <StyledButton text="Cancelar" color="red" onClick={() => { clearPhotos(), router.replace('/main') }} />
                <StyledButton text="Registrar" color="green" onClick={() => { }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },

    buttonBack: {
        width: 100
    },

    optionsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    scrollView: {
        flex: 1,
        height: '100%'
    }
});
