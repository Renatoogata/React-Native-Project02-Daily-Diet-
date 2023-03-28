import { Circle, Container, Line, Text, Time } from "./styles";

import { ColorTypeStyleProps } from "./styles";

type Props = {
    type?: ColorTypeStyleProps
    title: string
    time: string
}

export function MealCard({ type = 'PRIMARY', title, time }: Props) {
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