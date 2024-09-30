import { StyleSheet } from "react-native";
import { Text } from "../ui/text";

interface StyledTitleProps {
    text: string
    color?: string
}

export default function StyledTitle({ text, color }: StyledTitleProps) {
    return (
        <Text selectionColor='white' size="2xl" style={{color: color ?? 'white'}}>
            {text}
        </Text>
    )
}

const style = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    }
})