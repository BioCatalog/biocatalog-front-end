import { ReactNode } from "react";
import { View, StyleSheet, Image } from "react-native";

interface AuthScreenProps {
    children: ReactNode
}

export default function AuthScreen({ children }: AuthScreenProps) {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={require('../../assets/logo/logoImage.png')} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    logoImage: {
        height: 150,
        aspectRatio: 1
    },
});
