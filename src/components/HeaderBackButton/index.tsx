import { useNavigation } from "@react-navigation/native";
import { BackIcon, BackIconButton, ColorTypeStyleProps, Container, Text } from "./styles";

type Props = {
    text: string;
    type: ColorTypeStyleProps
}

export function HeaderBackButton({ text, type = 'PRIMARY' }: Props) {

    const navigation = useNavigation()

    function handleBackOnePage() {
        navigation.goBack()
    }

    return (
        <Container
            type={type}
        >

            <BackIconButton
                onPress={handleBackOnePage}
            >
                <BackIcon />
            </BackIconButton>


            <Text>{text}</Text>
        </Container>
    )
}