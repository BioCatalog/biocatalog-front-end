import { StyleSheet } from "react-native";
import { Text } from "../ui/text";
import { Heading } from "../ui/heading";

interface StyledTitleProps {
    text: string
    color?: string
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "5xl" | "4xl" | "3xl" | "xs" 
    className?: string
}

export default function StyledTitle({ text, color, size, className }: StyledTitleProps) {
    return (
        <Heading className={className} selectionColor='white' bold={true} size={ size ?? "2xl"} style={[{color: color ?? 'white'}, style.title]}>
            {text}
        </Heading>
    )
}

const style = StyleSheet.create({
    title: {
        fontFamily: 'Roboto'
    }
})