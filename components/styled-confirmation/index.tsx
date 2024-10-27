import { StyleSheet, View } from "react-native";
import StyledButton from "../styled-button";

interface ConfirmationProps {
    firClick: () => void
    secClick: () => void
    firLabel: string
    secLabel: string
    firColor?: string
    secColor?: string
}

export default function StyledConfirmation({ firClick, secClick, firColor, firLabel, secLabel, secColor }: ConfirmationProps) {
    return (
        <View style={styles.optionsView}>
            <StyledButton text={firLabel} color={firColor ?? "red"} onClick={firClick} />
            <StyledButton text={secLabel} color={secColor ?? "green"} onClick={secClick} />
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