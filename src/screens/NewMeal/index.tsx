import { CheckButton } from "@components/CheckButton";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { Input } from "@components/Input";
import { useState } from "react";
import { Container, DateHourContainer, Text } from "./styles";
import { Button } from "@components/Button";
import { mealCreate } from "@storage/meal/mealCreate";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialValue = {
    name: '',
    description: '',
    date: '',
    time: '',
    onDiet: true,
}

export function NewMeal() {
    const [button, setButton] = useState(true)

    const [mealObj, setMealObj] = useState(initialValue)

    function handleSwitchButtonTrue() {
        setButton(true)
        setMealObj({ ...mealObj, onDiet: true })
    }

    function handleSwitchButtonFalse() {
        setButton(false)
        setMealObj({ ...mealObj, onDiet: false })
    }

    const navigation = useNavigation();

    async function handleAddNewMeal() {
        try {
            if (mealObj.name === '' || mealObj.description === "" || mealObj.date === "" || mealObj.time === "") {
                return Alert.alert('Nova Reifição', 'Porfavor Digite os dados corretamente')
            }

            await mealCreate(mealObj)

            navigation.goBack()
        } catch (error) {
            console.log(error)
            Alert.alert("Adicionar Refeição", "Não foi possível adicionar refeição")
        }
    }


    return (
        <Container>
            <HeaderBackButton
                text="Nova Refeição"
                type="PRIMARY"
            />

            <Text>
                Nome
            </Text>
            <Input
                onChangeText={text => setMealObj({ ...mealObj, name: text })}
            />

            <Text>
                Descrição
            </Text>
            <Input
                editable
                numberOfLines={5}
                maxLength={240}
                multiline
                onChangeText={text => setMealObj({ ...mealObj, description: text })}
            />

            <DateHourContainer>
                <Text>
                    Data
                </Text>

                <Text
                    style={{ marginRight: 130 }}
                >
                    Hora
                </Text>
            </DateHourContainer>
            <DateHourContainer>
                <Input
                    style={{
                        flex: 1,
                        marginRight: 20
                    }}
                    placeholder="dd/mm/yyyy"
                    onChangeText={text => setMealObj({ ...mealObj, date: text })}
                />
                <Input
                    style={{
                        flex: 1
                    }}
                    placeholder="hh:mm"
                    onChangeText={text => setMealObj({ ...mealObj, time: text })}
                />
            </DateHourContainer>

            <Text>Está dentro da dieta?</Text>

            <DateHourContainer>
                <CheckButton
                    name="Sim"
                    type="PRIMARY"
                    focus={button}
                    onPress={handleSwitchButtonTrue}
                />
                <CheckButton
                    name="Não"
                    type="SECONDARY"
                    focus={button}
                    onPress={handleSwitchButtonFalse}
                />
            </DateHourContainer>

            <Button
                style={
                    {
                        marginTop: 120
                    }
                }

                title="Cadastrar Refeição"
                onPress={handleAddNewMeal}
            >
            </Button>




        </Container>
    )
}