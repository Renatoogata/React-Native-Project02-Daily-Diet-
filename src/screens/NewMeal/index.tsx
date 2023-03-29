import { Button } from "@components/Button";
import { Header2 } from "@components/Header2";
import { Input } from "@components/Input";
import { NewMealButton } from "@components/NewMealButton";
import { useState } from "react";
import { Container, DateHourContainer, Text } from "./styles";


export function NewMeal() {
    const [button, setButton] = useState(true)

    function handleSwitchButton() {
        if (button === false) {
            setButton(true)
        }

        if (button === true) {
            setButton(false)
        }
    }

    return (
        <Container>
            <Header2
                text="Nova Refeição"
            />

            <Text>
                Nome
            </Text>
            <Input

            />

            <Text>
                Descrição
            </Text>
            <Input
                editable
                numberOfLines={5}
                maxLength={240}
                multiline
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
                />
                <Input
                    style={{
                        flex: 1
                    }}
                    placeholder="hh:mm"
                />
            </DateHourContainer>

            <Text>Está dentro da dieta?</Text>

            <DateHourContainer>
                <Button
                    name="Sim"
                    type="PRIMARY"
                    focus={button}
                    onPress={handleSwitchButton}
                />
                <Button
                    name="Não"
                    type="SECONDARY"
                    focus={button}
                    onPress={handleSwitchButton}
                />
            </DateHourContainer>

            <NewMealButton
                style={
                    {
                        marginTop: 120
                    }
                }

                name="penes"
            />


        </Container>
    )
}