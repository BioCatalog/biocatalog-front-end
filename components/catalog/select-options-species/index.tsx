import StyledInput from "@/components/styled-input";
import { ButtonIcon, Button } from "@/components/ui/button";
import { AddIcon, Icon } from "@/components/ui/icon";
import { StyleSheet } from "react-native";
import { View } from "react-native";

export default function SelectOptionsSpecies() {
    const options = ['Passarinho', 'Passarinho1', 'Passarinho2'];

    return (
        <View style={styles.container}>
            <View style={styles.select_input_container}>
                <StyledInput type="select-options" label="Especie" options={options} placeholder="Selecione a Especie" />
            </View>
            <Button size="lg" className="rounded-full p-3.5" style={styles.addButon}>
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