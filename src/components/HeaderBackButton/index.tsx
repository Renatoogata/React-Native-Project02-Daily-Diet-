import { BackIcon, BackIconButton, Container, Text } from "./styles";

type Props = {
    text: string;
}

export function HeaderBackButton({ text }: Props) {
    return (
        <Container
            type="PRIMARY"
        >

            <BackIconButton>
                <BackIcon />
            </BackIconButton>


            <Text>{text}</Text>
        </Container>
    )
}