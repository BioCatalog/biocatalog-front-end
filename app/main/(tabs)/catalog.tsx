import StyledTitle from "@/components/styled-title";
import { useCatalogDatabase } from "@/database/useCatalogDatabase";
import { useRecordDatabase } from "@/database/useRecordDatabase";
import { CatalogProps, RecordImagesProps, RecordProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function MyCatalog() {
    const [data, setData] = useState<CatalogProps[]>([]);
    const [records, setRecords] = useState<RecordProps[]>([]);
    const [image, setImage] = useState<RecordImagesProps[]>([]);

    const catalog = useCatalogDatabase();
    const record = useRecordDatabase();

    async function loadData() {
        const catalogRes = await catalog.getAll();
        const recordRes = await record.getAll();
        const recordImageRes = await record.getImages();

        if (catalogRes) {
            setData(catalogRes);
        }

        if (recordRes) {
            setRecords(recordRes);
        }

        if (recordImageRes) {
            setImage(recordImageRes);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <StyledTitle text="Catalogos" color="black" />
                {data.map((item) => (
                    <View key={item.id}>
                        <Text>{item.name}</Text>
                        <Text>{item.lifeTime}</Text>
                        <Text>{item.plantTime}</Text>
                        <Text>{item.cultivation}</Text>
                        <Text>{item.warning}</Text>
                    </View>
                ))}
            </View>

            <View style={{marginTop: 20}}>
                <StyledTitle text="Evidencias" color="black" />
                {
                    records.map((item) => (
                        <View key={item.id}>
                            <Text>{item.id}</Text>
                            <Text>{item.comment}</Text>
                        </View>
                    ))
                }
            </View>

            <View style={{marginTop: 20}}>
                <StyledTitle text="Fotos" color="black" />
                {
                    image.map((item) => (
                        <View key={item.id}>
                            <Text>{item.id}</Text>
                            <Image height={50} width={50} source={{ uri: item.imageURL }} />
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
    }
})