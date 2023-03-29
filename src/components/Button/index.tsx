import { Container, Text, Circle } from "./styles";
import { ColorTypeStyleProps } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
    type?: ColorTypeStyleProps;
    focus: boolean
    name: string
}

export function Button({ name, type = 'PRIMARY', focus = false, ...rest }: Props) {
    return (
        <Container
            type={type}
            focus={focus}
            {...rest}
        >
            <Circle
                type={type}
                focus={focus}
            />

            <Text>
                {name}
            </Text>
        </Container>
    )
}