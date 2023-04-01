import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type TitleTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: TitleTypeStyleProps
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 120px 26px;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Title = styled.Text<Props>`
    margin-bottom: 10px;
    
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500};
    `}
`

export const TextStatic = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const Image = styled.Image`
    margin-top: 40px;
`