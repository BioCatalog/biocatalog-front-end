import StyledConfirmation from "@/components/styled-confirmation";
import StyledInput from "@/components/styled-input";
import { useCatalogDatabase } from "@/database/useCatalogDatabase";
import { CatalogProps } from "@/interfaces";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, ScrollView, View, ToastAndroid } from "react-native";

export default function CollectionForm() {
    const [collection, setCollection] = useState<CatalogProps>({} as CatalogProps);
    const catalogDatabase = useCatalogDatabase();

    function handleCreate() {
        if (!collection.name) return ToastAndroid.showWithGravity('Preencha os campos obrigatórios', ToastAndroid.SHORT, ToastAndroid.TOP);

        catalogDatabase.create(collection).then(() => {
            ToastAndroid.showWithGravity('Criado com sucesso!', ToastAndroid.SHORT, ToastAndroid.TOP);
            setCollection({} as CatalogProps);
        }).catch((error) => {
            ToastAndroid.showWithGravity('Erro ao criar' + error, ToastAndroid.SHORT, ToastAndroid.TOP);
        })
    }

    function handleBack() {
        setCollection({} as CatalogProps);
        router.back();
    }

    return (
        <ScrollView contentContainerStyle={style.container}>
            <View style={style.containerInput}>
                <StyledInput defaultValue={collection.name} label="Nome da especie" type="text" placeholder="Digite o nome da especie" onChangeText={(value) => { setCollection({ ...collection, name: value }) }} />
                <StyledInput defaultValue={collection.lifeTime} label="Tempo de vida" type="text" placeholder="Digite o tempo de vida" onChangeText={(value) => { setCollection({ ...collection, lifeTime: value }) }} />
                <StyledInput defaultValue={collection.plantTime} label="Época de plantio" type="text" placeholder="Digite a época de plantio" onChangeText={(value) => { setCollection({ ...collection, plantTime: value }) }} />
                <StyledInput defaultValue={collection.cultivation} label="Cultivo" type="text-area" placeholder="Digite sobre o cultivo" onChangeText={(value) => { setCollection({ ...collection, cultivation: value }) }} />
                <StyledInput defaultValue={collection.warning} label="Atenção" type="text-area" placeholder="Digite sobre as precauções e observações" onChangeText={(value) => { setCollection({ ...collection, warning: value }) }} />
                <View style={style.containerButtons}>
                    <StyledConfirmation firClick={handleBack} firLabel="Voltar" firColor="#A41718" secClick={handleCreate} secLabel="Criar" />
                </View>
            </View>
        </ScrollView >
    )
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
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
