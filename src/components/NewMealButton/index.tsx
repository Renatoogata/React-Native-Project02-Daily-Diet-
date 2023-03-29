import { TouchableOpacityProps } from "react-native";
import { Container, PlusIcon, Text } from "./styles";

type Props = TouchableOpacityProps & {
    name: string
};

export function NewMealButton({ name, ...rest }: Props) {
    return (
        <Container{...rest}>
            <PlusIcon />

            <Text>
                Nova Refeição
            </Text>
        </Container>
    )
}