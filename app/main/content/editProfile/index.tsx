import StyledInput from "@/components/styled-input"
import { Text, View, ScrollView } from "react-native"
import { useAuth } from "@/context/auth"
import StyledButton from "@/components/styled-button";
import { router } from "expo-router";
import { useState } from "react";
import { UserProps } from "@/interfaces/user";

export default function handleEdit() {

    const auth = useAuth();
    
    const [edit, setEdit] = useState<UserProps>({} as UserProps);

    return (
        <View>
            <ScrollView>
                <StyledInput label="Nome" type="text" defaultValue={auth.userInfo.name} onChangeText={(text) => { setEdit({...edit, name: text})}}/>
                <StyledInput label="Formação" type="text" defaultValue={auth.userInfo.form} onChangeText={(text) => { setEdit({...edit, form: text})}}/>
                <StyledInput label="E-mail" type="text" defaultValue={auth.userInfo.email} onChangeText={(text) => { setEdit({...edit, email: text})}}/>
                
                <StyledButton onClick={() => auth.handleUpdate(edit)} text="Salvar" color="#297d28" />
                <StyledButton onClick={() => { router.replace('/main/(tabs)/profile') }} text="Voltar" color="#469158" />
            </ScrollView>
        </View>
    )
}