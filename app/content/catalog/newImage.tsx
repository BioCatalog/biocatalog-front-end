import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import * as FileSystem from 'expo-file-system'
import StyledButton from "@/components/styled-button";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

export default function Camera() {
    const [perm, reqPerm] = useCameraPermissions();
    const [photo, setPhoto] = useState<string | null>(null);
    const [photoName, setPhoneName] = useState('photo.jpg');
    const [photoIndex, setPhotoIndex] = useState(0);

    let camera: CameraView | null;

    const takePicture = async () => {
        const photoFileName = FileSystem.documentDirectory + `photo${photoIndex}.jpg`;
        setPhoneName(photoFileName);

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

    const verificarFoto = async () => {
        const file = await FileSystem.getInfoAsync(photoName)

        if (file.exists) {
            setPhoto(file.uri)
        }
    }

    useEffect(() => {
        verificarFoto()
    }, [photoName])

    if (!perm) return <></>

    return (
        <View style={styles.container}>
            <FontAwesome size={30} name="arrow-left" onPress={() => { router.back() }} />

            <CameraView facing="back" ref={(ref) => { camera = ref }}
                style={{ width: 300, height: 300 }} />

            <StyledButton text="Tirar foto" onClick={takePicture} />
            {photo && (<Image source={{ uri: photo }} style={{ width: 250, height: 250, borderRadius: 125 }} />)}
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
    }
})