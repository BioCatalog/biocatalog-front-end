import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { RecordProps } from "@/interfaces";

export default function CatalogDetails() {
    const { name, lifeTime, plantTime, cultivation, warning, records } = useLocalSearchParams();

    const parsedRecords: RecordProps[] = records ? JSON.parse(records as string) : [];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.text}>Tempo de Vida: {lifeTime}</Text>
            <Text style={styles.text}>Época de Plantio: {plantTime}</Text>
            <Text style={styles.text}>Cultivo: {cultivation}</Text>
            <Text style={styles.text}>Observações: {warning}</Text>

            <View style={styles.imageContainer}>
                {parsedRecords.map((record, index) => (
                    record.imageURL[0]?.imageURL && (
                        <Image 
                            key={index}
                            source={{ uri: record.imageURL[0].imageURL }}
                            style={styles.image}
                        />
                    )
                ))}
            </View>
        </ScrollView>
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
});
