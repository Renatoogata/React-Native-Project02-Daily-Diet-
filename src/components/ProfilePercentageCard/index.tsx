import { useNavigation } from "@react-navigation/native";
import { ArrowButton, ArrowUp, CardTypeStyleProps, Container, Number, Text } from "./styles";

type Props = {
    type?: CardTypeStyleProps;
}

export function ProfilePercentageCard({ type = "PRIMARY" }: Props) {

    const navigation = useNavigation()

    function handleCreateMeal() {
        navigation.navigate('home')
    }

    return (
        <Container
            type={type}
        >
            <ArrowButton
                onPress={handleCreateMeal}
            >
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