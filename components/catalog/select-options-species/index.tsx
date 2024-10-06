import StyledInput from "@/components/styled-input";
import { ButtonIcon, Button } from "@/components/ui/button";
import { AddIcon, Icon } from "@/components/ui/icon";
import { useCatalogDatabase } from "@/database/useCatalogDatabase";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";

interface SOSpeciesProps {
    onChange: (text: string) => void
}

export default function SelectOptionsSpecies({ onChange }: SOSpeciesProps) {
    const [options, setOptions] = useState<Array<{ name: string, id: string }>>([]);
    const catalog = useCatalogDatabase();

    async function loadOptions() {
        const opt = await catalog.getAsOption();

        if (opt) {
            setOptions(opt);
        }
    }

    useEffect(() => {
        loadOptions();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.select_input_container}>
                <StyledInput type="select-options" label="Especie" options={options} onChangeText={onChange} placeholder="Selecione a Especie" />
            </View>
            <Button size="lg" className="rounded-full p-3.5" style={styles.addButon} onPress={() => { router.navigate('/main/(tabs)/collection') }}>
                <ButtonIcon>
                    <Icon as={AddIcon} />
                </ButtonIcon>
            </Button>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },

    select_input_container: {
        marginEnd: 10,
        flexGrow: 1
    },

    addButon: {
        backgroundColor: '#659867',
        borderRadius: 10,
        aspectRatio: 1,
    }
})