import StyledInput from "@/components/styled-input"
import { View, ScrollView } from "react-native"
import { useAuth } from "@/context/auth"
import StyledButton from "@/components/styled-button";
import { router } from "expo-router";

export default function handleEdit() {

    const auth = useAuth();

    return (
        <View>
            <ScrollView>
                <StyledInput placeholder="Senha atual" onChangeText={} type="password" defaultValue={auth.userInfo.name}/>
                <StyledInput placeholder="Senha nova" type="password" defaultValue={auth.userInfo.name}/>
                <StyledInput placeholder="Confirme senha nova" type="password" defaultValue={auth.userInfo.name}/>

                <StyledButton onClick={() => auth.handleChangePass()} text="Salvar" color="#297d28" />
                <StyledButton onClick={() => { router.replace('/main/(tabs)/profile') }} text="Cancelar" color="#469158" />
            </ScrollView>
        </View>
    )
}