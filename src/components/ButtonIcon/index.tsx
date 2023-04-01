import { TouchableOpacityProps } from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { Container, Icon, Title, ButtonIconTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps
    title: string
}

export function ButtonIcon({ type = 'PRIMARY', title, icon, ...rest }: Props) {
    return (
        <Container
            {...rest}
            type={type}
        >
            <Icon
                type={type}
                name={icon}
            />

            <Title
                type={type}
            >
                {title}
            </Title>
        </Container>
    )
}