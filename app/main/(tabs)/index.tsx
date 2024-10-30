import StyledTitle from "@/components/styled-title";
import { Divider } from "@/components/ui/divider";
import { Text } from "@/components/ui/text";
import { StyleSheet, ScrollView } from "react-native";

export default function Login() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StyledTitle className="mb-4" text="Bem-vindo ao BioCatalog" color="black" />
            <Text style={styles.description}>
                Descubra e registre a rica diversidade das Plantas Alimentícias Não Convencionais (PANCs) de forma fácil e intuitiva.
            </Text>
            <Text style={styles.projectInfo}>
                Nosso projeto tem como missão promover o conhecimento e a preservação das PANCs, plantas que não são amplamente cultivadas,
                mas que possuem imenso potencial nutricional, medicinal e alimentício.
            </Text>

            <Divider className="my-5" />

            <StyledTitle className="mb-4" size="lg" text="O que você pode fazer:" color="black" />

            <Text style={styles.feature}>
                - **Adicionar Informações Detalhadas**: Compartilhe conhecimentos sobre cada espécie, como nome popular, características, usos, cultivo e outros.
            </Text>
            <Text style={styles.feature}>
                - **Registrar Espécies**: Capture fotos das PANCs, registrando sua localização exata e detalhando a descoberta.
            </Text>
            <Text style={styles.feature}>
                - **Contribuir para a Conservação**: Ajude a aumentar a consciência sobre a importância das PANCs e incentive práticas sustentáveis.
            </Text>
            <Text style={styles.community}>
                Junte-se à nossa comunidade e torne-se parte de um movimento que valoriza a biodiversidade!
            </Text>

            <Divider className="my-5" />

            <StyledTitle className="mb-4" size="lg" text="Sobre nós" color="black" />

            <Text style={styles.projectInfo}>
                Nós somos alunos da Fatec do curso de Analise e Desenvolvimento de Sistemas e esse projeto é nosso desenvolvimento do projeto interdisciplinar.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    projectInfo: {
        fontSize: 14,
        textAlign: 'center'
    },
    feature: {
        fontSize: 14,
        marginBottom: 5,
    },
    community: {
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center',
    }
})
