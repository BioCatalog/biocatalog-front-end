import { Text } from "react-native";

interface StyledLabelProps {
    text: string
}

export default function StyledLabel({ text }: StyledLabelProps) {
    return (
        <Text className="text-typography-500 leading-1 font-bold text-black">{text}</Text>
    )
}