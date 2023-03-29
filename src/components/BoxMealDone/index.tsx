import { BoxTypeStyleProps, Container, Number, Text } from "./styles";

type Props = {
    type?: BoxTypeStyleProps
    text: string;
    number: number;
}

export function BoxMealDone({ type = 'PRIMARY', text, number }: Props) {
    return (
        <Container type={type}>
            <Number>
                {number}
            </Number>

            <Text>
                Refeições {text} da dieta
            </Text>
        </Container>
    )
}