import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Container, Date, MealText } from "./styles";

import { PercentageCard } from "@components/PercentageCard";
import { MealCard } from "@components/MealCard";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { useCallback, useState } from "react";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";
import { Loading } from "@components/Loading";
import { Alert, FlatList } from "react-native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";

export function Home() {
    const [isLoading, setIsLoading] = useState(true);

    const [meals, setMeals] = useState<MealStorageDTO[]>([])
    const [goodMealcount, setGoodMealCount] = useState(0)

    const navigation = useNavigation()

    function handleCreateMeal() {
        navigation.navigate('meal')
    }

    async function fetchMeals() {
        try {
            setIsLoading(true)

            const data = await mealsGetAll()

            setMeals(data);

        } catch (error) {
            console.log(error)
            Alert.alert('Reifeições', 'Não foi possível carregar as refeições')
        } finally {
            setIsLoading(false)
        }
    }

    function getPercentage() {
        var x = 0;

        var y = 0;
        meals.forEach(result => {
            if (result.onDiet) {
                x++
            }
        })

        y = (x / meals.length) * 100

        const result = y.toFixed(2)

        return result
    }


    useFocusEffect(useCallback(() => {
        fetchMeals()
    }, []))

    return (
        <Container>
            <Header

            />

            <PercentageCard
                getPercentage={getPercentage}
            />

            <MealText>
                Refeições
            </MealText>

            <ButtonIcon
                title="Nova Refeição"
                icon="add"
                type="PRIMARY"
                onPress={handleCreateMeal}
            />


            {
                isLoading ? <Loading /> :
                    <>
                        <Date>
                            20.03.23
                        </Date>

                        <FlatList
                            data={meals}
                            keyExtractor={meals => meals.id}
                            renderItem={({ item }) => (
                                <MealCard
                                    title={item.name}
                                    time={item.time}
                                    typeBoolean={item.onDiet}
                                    type='PRIMARY'
                                />
                            )}
                        />
                    </>
            }
        </Container>
    )
}