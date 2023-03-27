import styled, { css } from "styled-components/native";
import { ArrowUpRight } from 'phosphor-react-native'

export type CardTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: CardTypeStyleProps
}

export const Container = styled.View<Props>`
    margin-top: 30px;
    
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 22px;
    
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
    right: 8px;
    top: 8px;
`

export const ArrowUp = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
    size: 22,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500
})) <Props>``