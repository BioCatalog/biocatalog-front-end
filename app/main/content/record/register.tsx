import { router } from "expo-router";
import { useState, useEffect } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import PhotoBox from "@/components/catalog-record/add-boxes";
import StyledButton from "@/components/styled-button";
import CatalogInputs from "@/components/catalog-record/inputs";
import { ScrollView } from "react-native";
import Camera from "./newImage";

import * as FileSystem from 'expo-file-system'
import { RecordProps } from "@/interfaces";
import { useRecordDatabase } from "@/database/useRecordDatabase";

export default function RegisterSpecie() {
    const [record, setRecord] = useState<RecordProps>({} as RecordProps);
    const [photo, setPhoto] = useState<string[]>([]);
    const [cameraVisible, setCameraVisible] = useState(false);

    const recordDatabase = useRecordDatabase();

    function handleRegister() {
        if (record) {
            recordDatabase.create(record).then(() => {
                ToastAndroid.showWithGravity('Evidencia registrada!', ToastAndroid.SHORT, ToastAndroid.TOP);
                router.replace('/main/(tabs)/catalog');
            }).catch((e) => {
                ToastAndroid.showWithGravity('Não foi possível registrar' + e, ToastAndroid.SHORT, ToastAndroid.TOP);
            });

        }
    }

    async function handleCancel() {
        photo.map(async (content) => {
            await FileSystem.deleteAsync(content);
        });

        router.replace('/main/(tabs)');
    }

    async function handleCameraVisible() {
        setCameraVisible(!cameraVisible);
    }

    useEffect(() => {
        setRecord({...record, imageURL: photo.map((item) => ({imageURL: item}))});
    }, [photo, setPhoto]);

    return (
        <View style={styles.container}>
            {cameraVisible && <Camera photoIndex={photo.length} setPhotos={setPhoto} onCancel={handleCameraVisible} />}

            <ScrollView style={styles.scrollView}>
                <PhotoBox photosURL={photo} setPhotos={setPhoto} onAdd={handleCameraVisible} />
                <CatalogInputs record={record} setRecord={setRecord} />
            </ScrollView>

            <View style={styles.optionsView}>
                <StyledButton text="Cancelar" color="red" onClick={handleCancel} />
                <StyledButton text="Registrar" color="green" onClick={handleRegister} />
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
