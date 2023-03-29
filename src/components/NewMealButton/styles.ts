import styled, { css } from "styled-components/native";
import { Plus } from 'phosphor-react-native'
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 6px;
       
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    size: 20,
    color: theme.COLORS.WHITE
}))`
    margin-right: 8px;
`

export const Text = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`



