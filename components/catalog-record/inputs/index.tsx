import { View, StyleSheet } from "react-native";
import SelectOptionsSpecies from "../select-options-species";
import StyledInput from "@/components/styled-input";
import { useState, useEffect } from "react";

import * as Location from 'expo-location';
import CurrentMaps from "../maps";
import { RecordProps } from "@/interfaces";

interface CatalogInputsProps {
    record: RecordProps
    setRecord: React.Dispatch<React.SetStateAction<RecordProps>>
}

export default function CatalogInputs({ record, setRecord }: CatalogInputsProps) {
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

    function handleChangeOption(value: string) {
        setRecord({...record, catalog: value});
    }

    return (
        <View style={styles.container}>
            <SelectOptionsSpecies onChange={handleChangeOption} />
            <StyledInput placeholder="Faça um comentário" type="text-area" label="Comentário" onChangeText={(value) => {setRecord({...record, comment: value})}} />
            <StyledInput 
            onChangeText={(value) => {setRecord({...record, createDate: value})}}
            isRead={true} 
            defaultValue={`${date.toLocaleDateString('pt-BR')} | ${date.toLocaleTimeString('pt-BR')}`} 
            type="text" 
            label="Data e hora" />
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