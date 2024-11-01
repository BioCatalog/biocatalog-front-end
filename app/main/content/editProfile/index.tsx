import StyledInput from "@/components/styled-input"
import { Text, View, ScrollView } from "react-native"
import { useAuth } from "@/context/auth"
import StyledButton from "@/components/styled-button";

export default function handleEdit() {

    const auth = useAuth();

    return (
        <View>
            <ScrollView>
                <StyledInput label="Nome" type="text" defaultValue={auth.userInfo.name}/>
                <StyledInput label="Formação" type="text" defaultValue={auth.userInfo.form}/>

                <StyledButton onClick={auth.handleUpdate} text="Salvar" color="#509044" />
            </ScrollView>
        </View>
    )
}