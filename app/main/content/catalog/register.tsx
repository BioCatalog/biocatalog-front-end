import { router } from "expo-router";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import PhotoBox from "@/components/catalog/add-boxes";
import StyledButton from "@/components/styled-button";
import CatalogInputs from "@/components/catalog/inputs";
import { ScrollView } from "react-native";
import Camera from "./newImage";

import * as FileSystem from 'expo-file-system'

export default function RegisterSpecie() {
    const [photo, setPhoto] = useState<string[]>([]);
    const [cameraVisible, setCameraVisible] = useState(false);

    const cancelRegister = async () => {
        photo.map(async (content) => {
            const file = await FileSystem.deleteAsync(content);
        });

        router.replace('/main/(tabs)');
    }

    const handleCameraVisible = () => {
        setCameraVisible(!cameraVisible);
    }

    return (
        <View style={styles.container}>
            {cameraVisible && <Camera photoIndex={photo.length} setPhotos={setPhoto} onCancel={handleCameraVisible} />}

            <ScrollView style={styles.scrollView}>
                <PhotoBox photosURL={photo} setPhotos={setPhoto} onAdd={handleCameraVisible} />
                <CatalogInputs />
            </ScrollView>

            <View style={styles.optionsView}>
                <StyledButton text="Cancelar" color="red" onClick={cancelRegister} />
                <StyledButton text="Registrar" color="green" onClick={() => { }} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    buttonBack: {
        width: 100
    },

    optionsView: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    scrollView: {
        flex: 1,
        padding: 15
    }
});
