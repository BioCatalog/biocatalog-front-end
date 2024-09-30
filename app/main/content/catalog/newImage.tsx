import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import * as FileSystem from 'expo-file-system'
import StyledButton from "@/components/styled-button";
import { router } from "expo-router";

export default function Camera() {
    const [perm, reqPerm] = useCameraPermissions();
    const [photo, setPhoto] = useState('');
    const [photoIndex, setPhotoIndex] = useState(0);

    let camera: CameraView | null;

    const takePicture = async () => {
        const photoFileName = FileSystem.documentDirectory + `photo${photoIndex}.jpg`;
        setPhoto(photoFileName);

        if (perm) {
            const photo = await camera?.takePictureAsync();

            if (photo?.uri) {
                setPhoto(photo.uri);

                await FileSystem.copyAsync({
                    from: photo.uri,
                    to: photoFileName
                })
            }

            setPhotoIndex(photoIndex + 1);
        } else {
            alert('Sem permissão');
        }
    }

    const verifyPhoto = async () => {
        const file = await FileSystem.getInfoAsync(photo);

        if (file.exists) {
            setPhoto(file.uri)
        }
    }

    useEffect(() => {
        verifyPhoto()
    }, [photo])

    if (!perm) return <></>

    return (
        <View style={styles.container}>
            <CameraView facing="back" ref={(ref) => { camera = ref }}
                style={{ width: 300, height: 300 }} />

            {photo && (<Image source={{ uri: photo }} style={{ width: 250, height: 250, borderRadius: 125 }} />)}

            <View style={styles.optionsView}>
                <StyledButton text="Voltar" color="red" onClick={() => router.back()} />
                <StyledButton text="Tirar foto" onClick={() => takePicture()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },

    optionsView: {
        position: 'static',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    }
})