import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { ArrowButton, ArrowUp, CardTypeStyleProps, Container, Number, Text } from "./styles";

type Props = {
    type?: CardTypeStyleProps;
    getPercentage(): void
}

export function PercentageCard({ type = "PRIMARY", getPercentage }: Props) {

    const navigation = useNavigation();

    function handleOpenProfile() {
        navigation.navigate('profile')
    }

    return (
        <Container
            type={type}
        >
            <ArrowButton
                onPress={handleOpenProfile}
            >
                <ArrowUp
                    type={type}
                />
            </ArrowButton>

            <Number>
                99,90%
            </Number>


            <Text>
                das refeições dentro da dieta
            </Text>
        </Container>
    )
}