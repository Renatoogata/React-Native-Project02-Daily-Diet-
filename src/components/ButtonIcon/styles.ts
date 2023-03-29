import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native";

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
    
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 6px;
       
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

`

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
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


