import { useCatalogDatabase } from "@/database/useCatalogDatabase";
import { useRecordDatabase } from "@/database/useRecordDatabase";
import { CatalogProps, RecordProps } from "@/interfaces";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function MyCatalog() {
    const [data, setData] = useState<CatalogProps[]>([]);
    const [records, setRecords] = useState<RecordProps[]>([]);

    const catalog = useCatalogDatabase();
    const record = useRecordDatabase();

    useEffect(() => {
        catalog.getAll()
            .then((res) => {
                if (res) setData(res);
            });

        record.getAll()
            .then((res) => {
                if (res) setRecords(res);
            })
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View>
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

            <View>
                {
                    records.map((item) => (
                        <View key={item.id}>
                            <Text>{item.catalog}</Text>
                            <Text>{item.comment}</Text>
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
        flex: 1
    }
})