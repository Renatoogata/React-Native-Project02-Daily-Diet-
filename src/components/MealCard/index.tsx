import { Circle, Container, Line, Text, Time } from "./styles";

import { ColorTypeStyleProps } from "./styles";

type Props = {
    type?: ColorTypeStyleProps
    title: string
    time: string
    typeBoolean: boolean
}

export function MealCard({ typeBoolean, title, time, type }: Props) {
    if (typeBoolean) {
        type = "PRIMARY"
    } else {
        type = "SECONDARY"
    }


    return (
        <Container>
            <Time>
                {time}
            </Time>

            <Line />

            <Text>
                {title}
            </Text>
            <Circle
                type={type}
            />
        </Container>
    )
}