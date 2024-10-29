import { StyleSheet, Text, View} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function NewEvidence() {
    useEffect(() => { router.replace('/main/content/record/register') }, []);

    return (        
        <View>
            <Text>Redirecionando...</Text>
        </View>
    )
}
