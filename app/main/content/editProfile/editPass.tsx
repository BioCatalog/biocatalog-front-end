import StyledInput from "@/components/styled-input"
import { View, ScrollView } from "react-native"
import { useAuth } from "@/context/auth"
import StyledButton from "@/components/styled-button";
import { router } from "expo-router";
import { useState } from "react";
import { UserProps } from "@/interfaces/user";

export default function handleEdit() {

    const auth = useAuth();
    
    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();

    return (
        <View>
            <ScrollView>
                <StyledInput placeholder="Senha atual" onChangeText={(pass) => { setOldPass(pass)}} type="password" defaultValue={""}/>
                <StyledInput placeholder="Senha nova" onChangeText={(pass) => { setNewPass(pass)}} type="password" defaultValue={""}/>
                <StyledInput placeholder="Confirme senha nova" onChangeText={(pass) => { setNewPass(pass)}} type="password" defaultValue={""}/>

                <StyledButton onClick={() => auth.handleChangePass(oldPass, newPass)} text="Salvar" color="#297d28" />
                <StyledButton onClick={() => { router.replace('/main/(tabs)/profile') }} text="Cancelar" color="#469158" />
            </ScrollView>
        </View>
    )
}