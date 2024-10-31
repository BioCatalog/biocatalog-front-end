import { Button, ButtonText } from "@/components/ui/button"
import StyledInput from "@/components/styled-input"
import { Text, View, ScrollView } from "react-native"
import { useAuth } from "@/context/auth"

export default function handleEdit() {

    const auth = useAuth();

    return (
        <View>
            <ScrollView>
                <StyledInput label="Nome" type="text" defaultValue={auth.userInfo.name}/>
                <StyledInput label="Formação" type="text" defaultValue={auth.userInfo.form}/>

                <Button ><ButtonText>Salvar</ButtonText></Button>
            </ScrollView>
        </View>
    )
}