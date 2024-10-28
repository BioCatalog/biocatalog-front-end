import { Image, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../ui/text";

interface ExpandImageProps {
    imageUrl: string
    visible: boolean
    onClose: () => void
}

export default function ExpandImage({ imageUrl, visible, onClose }: ExpandImageProps) {
    return (
        <Modal  
        visible={visible} 
        transparent={true} 
        onRequestClose={onClose} 
        animationType="fade">
            <TouchableOpacity onPress={onClose} style={styles.container}>
                {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
            </TouchableOpacity>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        height: '50%'
    }
})