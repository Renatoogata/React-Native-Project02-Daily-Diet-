import styled, { css } from "styled-components/native";

export type BoxTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: BoxTypeStyleProps
}

export const Container = styled.View<Props>`
    padding: 20px;
    margin: 20px 10px;

    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
    align-items: center;
    justify-content: center;
    border-radius: 4px;
`

export const Text = styled.Text`
    text-align: center;
    width: 120px;
    align-items: center;
    justify-content: center;
    
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const Number = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `}
`