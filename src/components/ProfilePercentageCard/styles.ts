import styled, { css } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native'

export type CardTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: CardTypeStyleProps
}

export const Container = styled.View<Props>`
    
    margin-left: -30px;
    margin-right: -30px;
    margin-top: -60px;

    padding-top: 80px;
    padding-bottom: 30px;

    justify-content: center;
    align-items: center;
    border-radius: 6px;
    
    
    background-size: auto 1em;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};

`

export const Number = styled.Text`

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XXL}px;
    `}
`
export const Text = styled.Text`
    
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`

export const ArrowButton = styled.TouchableOpacity`
    position: absolute;
    left: 32px;
    top: 50px;
`

export const ArrowUp = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
    size: 22,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500
})) <Props>``