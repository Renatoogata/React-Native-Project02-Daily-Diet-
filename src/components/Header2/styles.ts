import styled, { css } from "styled-components/native";
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    
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
