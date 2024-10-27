import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { RecordProps } from "@/interfaces";
import StyledButton from '@/components/styled-button';

export default function CatalogDetails() {
    const { name, lifeTime, plantTime, cultivation, warning, records } = useLocalSearchParams();

    const parsedRecords: RecordProps[] = records ? JSON.parse(records as string) : [];

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.text}>Tempo de Vida: {lifeTime}</Text>
                <Text style={styles.text}>Época de Plantio: {plantTime}</Text>
                <Text style={styles.text}>Cultivo: {cultivation}</Text>
                <Text style={styles.text}>Observações: {warning}</Text>

                <View style={styles.imageContainer}>
                    {parsedRecords.map((record, index) => (
                        <View style={styles.recordContainer}>
                            <Text>Registro n°{index}</Text>
                            <View style={styles.imageContainer}>
                                {
                                    record.imageURL.map((image) => (
                                        <Image
                                            key={image.imageURL}
                                            source={{ uri: image.imageURL }}
                                            style={styles.image}
                                        />
                                    ))
                                }
                            </View>
                        </View>
                    ))}
                </View>
                <StyledButton text='Voltar' onClick={() => { router.back(); }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
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
    recordContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
