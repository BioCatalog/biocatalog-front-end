import StyledInput from "@/components/styled-input"
import { View, ScrollView } from "react-native"
import { useAuth } from "@/context/auth"
import StyledButton from "@/components/styled-button";

export default function handleEdit() {

    const auth = useAuth();

    return (
        <View>
            <ScrollView>
                <StyledInput placeholder="Senha atual" type="password" defaultValue={auth.userInfo.name}/>
                <StyledInput placeholder="Senha nova" type="password" defaultValue={auth.userInfo.name}/>
                <StyledInput placeholder="Confirme senha nova" type="password" defaultValue={auth.userInfo.name}/>

                <StyledButton onClick={auth.handleUpdate} text="Salvar" color="#509044" />
            </ScrollView>
        </View>
    )
}