import { StyleSheet } from "react-native";
import { Button, ButtonSpinner, ButtonText } from "../ui/button";
import { InterfaceButtonProps } from "@gluestack-ui/button/lib/typescript/types";

interface StyledButtonProps extends InterfaceButtonProps {
    text: string,
    textColor?: string,
    color?: string
    onClick: () => void
    load?: boolean
}

export default function StyledButton({ text, onClick, color, textColor, load, ...rest }: StyledButtonProps) {
    return (
        <Button {...rest}
            style={[style.button, { backgroundColor: color ? color : "black" }]}
            onPress={onClick}
            isDisabled={load}>
            <ButtonText style={{ color: textColor ? textColor : "white" }}>{text}</ButtonText>
            {load && <ButtonSpinner />}
        </Button>
    )
}

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})