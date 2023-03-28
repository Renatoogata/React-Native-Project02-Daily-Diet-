import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 26px;
`;

export const Body = styled.View`
    align-items: center;
`

export const TextTitle = styled.Text`
    margin-top: 30px;
    margin-bottom: 28px;

    align-items: center;
    justify-content: center;

    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;

export const NumberBold = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `}
`

export const Text = styled.Text`
    margin-bottom: 20px;
   ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Box = styled.View`
    margin: 30px 10px 0px 10px;
    padding: 20px 20px 10px 20px;
    width: 150px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_100};
    align-items: center;
    
    border-radius: 4px;
`

