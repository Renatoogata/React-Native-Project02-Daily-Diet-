import { ButtonIcon } from "@components/ButtonIcon";
import { HeaderBackButton } from "@components/HeaderBackButton";
import { Container, Title, Description, Data, Circle, CheckDietContainer, TextDiet } from "./styles";


type Props = {
    title: string
    description: string
    data: string
    hour: string
    type: string
}

export function ViewMeal() {
    const type = 'PRIMARY'

    return (
        <Container>
            <HeaderBackButton
                text="Refeição"
                type={type}
            />

            <Title>
                Sanduíche
            </Title>

            <Description>
                Sanduíche de pão integral com atum e salada de alface e tomate.
            </Description>

            <Data>
                Data e hora
            </Data>

            <Description>
                12/08/2022 às 16:00
            </Description>

            <CheckDietContainer>
                {type === 'PRIMARY' ?
                    <>
                        <Circle
                            type="PRIMARY"
                        />

                        <TextDiet>
                            dentro da dieta
                        </TextDiet>
                    </>
                    :
                    <>
                        <Circle
                            type="SECONDARY"
                        />

                        <TextDiet>
                            fora da dieta
                        </TextDiet>
                    </>
                }
            </CheckDietContainer>

            <ButtonIcon
                icon="drive-file-rename-outline"
                type="PRIMARY"
                title="Editar refeição"

                style={{
                    marginTop: 'auto',
                    marginBottom: 10
                }}
            />

            <ButtonIcon
                icon="delete-outline"
                type="SECONDARY"
                title="Excluir refeição"
            />
        </Container>
    )
}