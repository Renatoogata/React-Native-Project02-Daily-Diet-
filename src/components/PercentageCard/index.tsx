import { ArrowButton, ArrowUp, CardTypeStyleProps, Container, Number, Text } from "./styles";

type Props = {
    type?: CardTypeStyleProps;
}

export function PercentageCard({ type = "PRIMARY" }: Props) {
    return (
        <Container
            type={type}
        >
            <ArrowButton>
                <ArrowUp
                    type={type}
                />
            </ArrowButton>

            <Number>
                90,86%z
            </Number>


            <Text>
                das refeições dentro da dieta
            </Text>
        </Container>
    )
}