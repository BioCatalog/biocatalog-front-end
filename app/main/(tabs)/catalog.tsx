import { useRouter } from 'expo-router';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import StyledTitle from "@/components/styled-title";
import { useCatalogDatabase } from "@/database/useCatalogDatabase";
import { CatalogProps } from "@/interfaces";

export default function MyCatalog() {
    const [data, setData] = useState<CatalogProps[]>([]);
    const router = useRouter();

    const catalog = useCatalogDatabase();

    async function loadData() {
        const catalogRes = await catalog.getWithImages();
        if (catalogRes) {
            setData(catalogRes);
        }
    }

    const openCatalogDetails = (catalog: CatalogProps) => {
        router.push({
            pathname: '/main/content/catalog',
            params: {
                name: catalog.name,
                lifeTime: catalog.lifeTime,
                plantTime: catalog.plantTime,
                cultivation: catalog.cultivation,
                warning: catalog.warning,
                records: JSON.stringify(catalog.record), 
            },
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <StyledTitle text="Catálogos" color="black" />

                <View style={styles.cardContainer}>
                    {data.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.card} onPress={() => openCatalogDetails(item)}>
                            {item.record && item.record[0]?.imageURL[0]?.imageURL && (
                                <Image source={{ uri: item.record[0].imageURL[0].imageURL }} style={styles.cardImage} />
                            )}
                            <Text style={styles.cardTitle}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        width: 150,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
