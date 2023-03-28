import { Header } from "@components/Header";
import { MealCard } from "@components/MealCard";
import { NewMealButton } from "@components/NewMealButton";
import { PercentageCard } from "@components/PercentageCard";

import { Container, Date, MealText } from "./styles";

export function Home() {
    return (
        <Container>
            <Header />

            <PercentageCard />

            <MealText>
                Refeições
            </MealText>

            <NewMealButton />

            <Date>
                12.08.22
            </Date>

            <MealCard title="Xburger" time="20:00" type="SECONDARY" />
            <MealCard title="Arroz com ovo e frango frito" time="10:00" type="PRIMARY" />
            <MealCard title="Pao com manteiga" time="22:00" type="PRIMARY" />
            <MealCard title="Bolo do chocolate recheado" time="08:00" type="SECONDARY" />

            <Date>
                12.08.22
            </Date>

            <MealCard title="Arroz com ovo" time="12:00" type="PRIMARY" />
            <MealCard title="Beringela frita" time="15:30" type="PRIMARY" />
        </Container>
    )
}