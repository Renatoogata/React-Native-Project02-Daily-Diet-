import { BackIcon, BackIconButton, Container, Text } from "./styles";

type Props = {
    text: string;
}

export function Header2({ text }: Props) {
    return (
        <Container>

            <BackIconButton>
                <BackIcon />
            </BackIconButton>


            <Text>{text}</Text>
        </Container>
    )
}