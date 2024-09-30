import { StyleSheet, Text, View} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function NewCatalog() {
    useEffect(() => { router.replace('/main/content/catalog/register') }, []);

    return (        
        <View>
            <Text>Redirecionando...</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    }
})
