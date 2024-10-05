import { StyleSheet, View } from "react-native";
import StyledButton from "../styled-button";

interface ConfirmationProps {
    firClick: () => void
    secClick: () => void
    firLabel: string
    secLabel: string
}

export default function StyledConfirmation({ firClick, secClick, firLabel, secLabel }: ConfirmationProps) {
    return (
        <View style={styles.optionsView}>
            <StyledButton text={firLabel} color="red" onClick={firClick} />
            <StyledButton text={secLabel} color="green" onClick={secClick} />
        </View>
    )
}


const styles = StyleSheet.create({
    optionsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
})