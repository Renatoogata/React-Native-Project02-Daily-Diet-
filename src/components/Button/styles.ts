import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ColorTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
    type: ColorTypeStyleProps
    focus: boolean
}


export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;

    flex-direction: row;
    align-items: baseline;
    justify-content: center;

    height: 50px;
    max-height: 50px;
    padding: 16px;
    border-radius: 6px;
    margin: 0 5px;
    
    border: 1px;

    ${({ theme, type, focus }) => css`
        background-color: ${type === "PRIMARY" && focus === true ? theme.COLORS.GREEN_100 :
            type === "SECONDARY" && focus === false ? theme.COLORS.RED_100 :
                theme.COLORS.WHITE
        };
        border-color: ${type === "PRIMARY" && focus === true ? theme.COLORS.GREEN_500 :
            type === "SECONDARY" && focus === false ? theme.COLORS.RED_500 :
                theme.COLORS.WHITE
        };
    `}
    
    
`

export const Circle = styled.View<Props>`
    background-color: ${({ theme, type }) => (type === 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_300)};
    width: 8px;
    height: 8px;
    border-radius: 8px;

    margin-right: 5px;
`

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`