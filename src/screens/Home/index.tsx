import { Header } from "@components/Header";
import { NewMealButton } from "@components/NewMealButton";
import { PercentageCard } from "@components/PercentageCard";

import { Container, MealText } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />

            <PercentageCard />

            <MealText>
                Refeições
            </MealText>

            <NewMealButton />
        </Container>
    )
}