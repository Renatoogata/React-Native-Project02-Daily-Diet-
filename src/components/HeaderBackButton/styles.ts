import styled, { css } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';

export type ColorTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'THIRDARY'

type Props = {
    type: ColorTypeStyleProps
}

export const Container = styled.View<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme, type }) =>
        (type === 'PRIMARY' && theme.COLORS.GRAY_200) ||
        (type === 'SECONDARY' && theme.COLORS.GREEN_100) ||
        (type === 'THIRDARY' && theme.COLORS.RED_100)
    };
    
    margin: -80px -32px 30px -32px;
    padding: 80px 50px 30px 50px;
`

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`

export const BackIconButton = styled.TouchableOpacity`
    position: absolute;
    left: 32px;
    bottom: 32px;
`

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GRAY_600,
}))``;
