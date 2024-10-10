import StyledTitle from "@/components/styled-title";
import { useCatalogDatabase } from "@/database/useCatalogDatabase";
import { useRecordDatabase } from "@/database/useRecordDatabase";
import { CatalogProps, RecordImagesProps, RecordProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Modal, Button } from "react-native";

export default function MyCatalog() {
    const [data, setData] = useState<CatalogProps[]>([]);
    const [selectedCatalog, setSelectedCatalog] = useState<CatalogProps | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const catalog = useCatalogDatabase();

    async function loadData() {
        const catalogRes = await catalog.getAll();
        if (catalogRes) {
            setData(catalogRes);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    const openModal = (catalog: CatalogProps) => {
        setSelectedCatalog(catalog);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedCatalog(null);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StyledTitle text="Catálogos" color="black" />

            <View style={styles.cardContainer}>
                {data.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.card} onPress={() => openModal(item)}>
                        <Image source={{}} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {selectedCatalog && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{selectedCatalog.name}</Text>
                            <Text>Tempo de Vida: {selectedCatalog.lifeTime}</Text>
                            <Text>Época de Plantio: {selectedCatalog.plantTime}</Text>
                            <Text>Cultivo: {selectedCatalog.cultivation}</Text>
                            <Text>Observações: {selectedCatalog.warning}</Text>
                            <Button color="green" title="Fechar" onPress={closeModal} />
                        </View>
                    </View>
                </Modal>
            )}
        </ScrollView>
    )
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
