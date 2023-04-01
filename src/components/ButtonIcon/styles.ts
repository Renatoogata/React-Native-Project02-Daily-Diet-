import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type?: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
    
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 18px;
    border-radius: 6px;

    border: 1.5px;
    border-color: ${({ theme }) => theme.COLORS.GRAY_600};
       
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};

`

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`


export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    size: 22,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700
}))`
    margin-right: 8px;
`;


