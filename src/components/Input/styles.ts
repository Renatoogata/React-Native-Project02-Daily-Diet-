import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`

    padding: 14px;

    border-radius: 6px;
    border: 1px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-top: 5px;
    margin-bottom: 18px;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_700}
    `}
`