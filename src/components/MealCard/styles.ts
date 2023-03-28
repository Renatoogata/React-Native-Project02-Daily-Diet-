import styled, { css } from "styled-components/native";

export type ColorTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ColorTypeStyleProps
}

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;

    padding: 12px;

    align-items: center;

    border: 1px;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    margin-bottom: 8px;
`

export const Time = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.ESM}px;
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const Line = styled.View`
    width: 0;
    height: 14px;

    border: 0.2px solid ${({ theme }) => theme.COLORS.GRAY_500};
    
    margin: 0 8px;
`

export const Text = styled.Text`
    flex: 1;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
    `}
`

export const Circle = styled.View<Props>`
    background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300)};
    width: 12px;
    height: 12px;
    border-radius: 12px;
`