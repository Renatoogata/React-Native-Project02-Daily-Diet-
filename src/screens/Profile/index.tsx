import { Body, Container, Footer, NumberBold, Text, TextTitle } from "./styles";
import { ProfilePercentageCard } from "@components/ProfilePercentageCard";
import { BoxMealDone } from "@components/BoxMealDone";

export function ProfileStatistics() {
    return (
        <Container>
            <ProfilePercentageCard type="PRIMARY" />

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
                <BoxMealDone text="dentro" type="PRIMARY" number={10} />
                <BoxMealDone text="fora" type="SECONDARY" number={20} />
            </Footer>
        </Container>
    )
}