import StyledInput from "@/components/styled-input"
import { View, ScrollView, StyleSheet, Text } from "react-native"
import { useAuth } from "@/context/auth"
import StyledButton from "@/components/styled-button";
import { router } from "expo-router";
import { useState } from "react";
import { UserProps } from "@/interfaces/user";

export default function EditProfile() {

    const auth = useAuth();

    const [edit, setEdit] = useState<UserProps>({} as UserProps);

    return (
        <ScrollView style={style.container}>
            <Text style={style.title}>Editar perfil</Text>
            <StyledInput label="Nome" type="text" defaultValue={auth.userInfo.name} onChangeText={(text) => { setEdit({ ...edit, name: text }) }} />
            <StyledInput label="Formação" type="text" defaultValue={auth.userInfo.form} onChangeText={(text) => { setEdit({ ...edit, form: text }) }} />
            <StyledInput label="E-mail" type="text" defaultValue={auth.userInfo.email} onChangeText={(text) => { setEdit({ ...edit, email: text }) }} />

            <StyledButton style={style.editPassButton} onClick={() => { router.replace('/main/content/editProfile/editPass') }} text="Editar senha" color="#297d28" />

            <View style={style.buttonRow}>
                <StyledButton style={style.saveButton} onClick={() => auth.handleUpdate(edit)} text="Salvar" color="#297d28" />
                <StyledButton style={style.backButton} onClick={() => { router.replace('/main/(tabs)/profile') }} text="Voltar" color="#469158" />
            </View>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        marginBottom: 23
    },
    editPassButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        marginTop: 20
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100
    }

})