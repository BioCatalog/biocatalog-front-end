import { View, StyleSheet } from "react-native";
import SelectOptionsSpecies from "../select-options-species";
import StyledInput from "@/components/styled-input";
import MapView, { Marker } from 'react-native-maps';
import { useState, useEffect } from "react";

import * as Location from 'expo-location';
import CurrentMaps from "../maps";

export default function CatalogInputs() {
    const date = new Date();

    const [location, setLocation] = useState<Location.LocationObject | null>();
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permissão para acessar localização negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <SelectOptionsSpecies />
            <StyledInput placeholder="Faça um comentário" type="text-area" label="Comentário" />
            <StyledInput isRead={true} defaultValue={`${date.toLocaleDateString('pt-BR')} | ${date.toLocaleTimeString('pt-BR')}`} type="text" label="Data e hora" />

            {
                location &&
                <CurrentMaps location={location} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});