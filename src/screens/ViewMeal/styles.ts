import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type CircleTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: CircleTypeStyleProps
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 26px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const Description = styled.Text`
    margin: 8px 0px 18px;
    
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_600};
    `}
`

export const Data = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const CheckDietContainer = styled.View`
    flex-direction: row;
    align-items: baseline;

    padding: 20px;
`

export const Circle = styled.View<Props>`
    background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500)};
    width: 8px;
    height: 8px;
    border-radius: 8px;

    margin-right: 8px;
`

export const TextDiet = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
    `}
`