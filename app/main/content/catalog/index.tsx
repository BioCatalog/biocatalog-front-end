import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { RecordProps } from "@/interfaces";
import { Button, ButtonIcon } from '@/components/ui/button';
import { ArrowLeftIcon, Icon } from '@/components/ui/icon';
import { useState } from 'react';
import ExpandImage from '@/components/expand-image';

export default function CatalogDetails() {
    const [showImage, setShowImage] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const { name, lifeTime, plantTime, cultivation, warning, records } = useLocalSearchParams();

    const parsedRecords: RecordProps[] = records ? JSON.parse(records as string) : [];

    return (
        <View style={styles.container}>
            <ExpandImage imageUrl={currentImage} visible={showImage} onClose={() => { setShowImage(false) }} />
            <Button
                onPress={() => { router.back(); }}
                style={{ alignSelf: 'flex-start', backgroundColor: 'transparent', position: 'absolute', zIndex: 1 }}>
                <ButtonIcon>
                    <Icon as={ArrowLeftIcon} height={30} color="black" />
                </ButtonIcon>
            </Button>

            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>{name}</Text>
                
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Tempo de Vida</Text>
                    <Text style={styles.text}>{lifeTime}</Text>

                    <Text style={styles.cardTitle}>Época de Plantio</Text>
                    <Text style={styles.text}>{plantTime}</Text>

                    <Text style={styles.cardTitle}>Cultivo</Text>
                    <Text style={styles.text}>{cultivation}</Text>

                    <Text style={styles.cardTitle}>Observações</Text>
                    <Text style={styles.text}>{warning}</Text>
                </View>

                {parsedRecords.map((record, index) => (
                    <View key={record.id?.toString()} style={styles.card}>
                        <Text style={styles.cardTitle}>Registro n°{index + 1}</Text>
                        <Text style={styles.text}>{record.comment}</Text>
                        <View style={styles.imageContainer}>
                            {record.imageURL.map((image) => (
                                <TouchableOpacity key={image.imageURL}
                                    onPress={() => {
                                        setCurrentImage(image.imageURL);
                                        setShowImage(true);
                                    }}>
                                    <Image source={{ uri: image.imageURL }} style={styles.image} />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentContainer: {
        alignItems: 'flex-start', 
        padding: 20, 
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#f8f8f8', 
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        width: '100%', 
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 10,
    },
});
