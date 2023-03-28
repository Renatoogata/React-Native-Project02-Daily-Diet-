import { Body, Box, Container, Footer, NumberBold, Text, TextTitle } from "./styles";
import { ProfilePercentageCard } from "@components/ProfilePercentageCard";

export function ProfileStatistics() {

    return (
        <Container>
            <ProfilePercentageCard />

            <Body>
                <TextTitle>
                    Estatísticas gerais
                </TextTitle>

                <NumberBold>
                    22
                </NumberBold>

                <Text>
                    melhor sequência de pratos dentro da dieta
                </Text>

                <NumberBold>
                    109
                </NumberBold>

                <Text>
                    refeições registradas
                </Text>
            </Body>


            <Footer>
                <Box>
                    <NumberBold>
                        99
                    </NumberBold>
                    <Text>
                        refeições dentro da dieta
                    </Text>
                </Box>

                <Box>
                    <NumberBold>
                        99
                    </NumberBold>
                    <Text>
                        refeições fora da dieta
                    </Text>
                </Box>
            </Footer>
        </Container>
    )
}