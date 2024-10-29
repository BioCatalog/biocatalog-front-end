import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import RegisterSpecie from "../content/record/register";

export default function NewEvidence() {
    //useEffect(() => { router.replace('/main/content/record/register') }, []);

    return (
        <RegisterSpecie />

        // <View>
        //     <Text>Redirecionando...</Text>
        // </View>
    )
}
