import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import * as FileSystem from 'expo-file-system'

export default function Camera() {
    const [perm, reqPerm] = useCameraPermissions()
    const [photo, setPhoto] = useState<string | null>(null)

    const photoFileName = FileSystem.documentDirectory + 'photo.jpg'

    let camera: CameraView | null;
    
    const takePicture = async () => {
        if (perm) {
            const photo = await camera?.takePictureAsync()

            if (photo?.uri){
                setPhoto(photo.uri)
                await FileSystem.copyAsync({
                    from: photo.uri,
                    to: photoFileName
                })
            }
        } else{
            alert('Sem permissão');
        }
    }

    const verificarFoto = async() => {
        const file = await FileSystem.getInfoAsync(photoFileName)
        
        if(file.exists){
            setPhoto(file.uri)
        }
    }

    useEffect(()=>{
        verificarFoto()
    }, [])

    if (!perm) return <></>

    return (
        <View style={styles.container}>
            <CameraView facing="back" ref={(ref) => { camera = ref }}
                style={{ width: 300, height: 300 }}
            />

            <Button style={{ backgroundColor: 'green', padding: 20 }} onPress={() => takePicture()}>
                <ButtonText>Tirar foto</ButtonText>
            </Button>
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