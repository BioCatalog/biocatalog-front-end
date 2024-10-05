import StyledConfirmation from "@/components/styled-confirmation";
import StyledInput from "@/components/styled-input";
import { StyleSheet, ScrollView, View } from "react-native";

export default function Collection() {
    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.containerInput}>
                <StyledInput label="Nome da especie" type="text" placeholder="Digite o nome da especie" />
                <StyledInput label="Tempo de vida" type="text" placeholder="Digite o tempo de vida" />
                <StyledInput label="Época de plantio" type="text" placeholder="Digite a época de plantio" />
                <StyledInput label="Cultivo" type="text-area" placeholder="Digite sobre o cultivo" />
                <StyledInput label="Atenção" type="text-area" placeholder="Digite sobre as precauções e observações" />

                <View style={style.containerButtons}>
                    <StyledConfirmation firClick={() => { }} firLabel="Resetar" secClick={() => { }} secLabel="Criar" />
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    containerInput: {
        width: '100%',
        padding: 20,
        marginTop: 20,
        flex: 1,
        rowGap: 20,
    },
    containerButtons: {
        marginTop: 40
    }
})
