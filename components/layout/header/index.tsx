import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Image, StyleSheet, Text } from "react-native";

export default function Header() {
    return (
        <Box style={styles.container}>
            <HStack>
                <Image style={{ width: 50, height: 50 }} source={require('../../../assets/logo/logoImage.png')} />
                <Text>Tela 1</Text>
            </HStack>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        backgroundColor: 'green'
    }
})