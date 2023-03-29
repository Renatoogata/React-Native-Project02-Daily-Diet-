import { CheckButton } from "@components/CheckButton";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { Input } from "@components/Input";
import { useState } from "react";
import { Container, DateHourContainer, Text } from "./styles";
import { Button } from "@components/Button";

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
            <HeaderBackButton
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
                <CheckButton
                    name="Sim"
                    type="PRIMARY"
                    focus={button}
                    onPress={handleSwitchButton}
                />
                <CheckButton
                    name="Não"
                    type="SECONDARY"
                    focus={button}
                    onPress={handleSwitchButton}
                />
            </DateHourContainer>

            <Button
                style={
                    {
                        marginTop: 'auto'
                    }
                }

                title="Cadastrar Refeição"
            >
            </Button>




        </Container>
    )
}