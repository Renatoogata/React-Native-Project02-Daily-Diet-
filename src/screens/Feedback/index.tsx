import { Container, Title, TitleTypeStyleProps, Text, TextStatic, Image } from "./styles";

import FeelingGood from '@assets/good.png'
import FeelingBad from '@assets/bad.png'
import { Button } from "@components/Button";

type Props = {
    type: TitleTypeStyleProps
}

export function Feedback() {
    const type = 'PRIMARY';

    return (
        <Container>
            {type === 'PRIMARY' ?
                <>
                    <Title
                        type={type}
                    >
                        Contine assim!
                    </Title>

                    <TextStatic>Você continua <Text> dentro da dieta</Text>. Muito bem!</TextStatic>

                    <Image
                        source={FeelingGood}
                    />

                    <Button
                        style={{
                            marginTop: 'auto',
                            width: '60%'
                        }}
                        title="Ir para a página Inicial"
                    />
                </>
                :
                <>
                    <Title
                        type={type}
                    >
                        Que Pena!
                    </Title>

                    <TextStatic>Você <Text> saiu da dieta</Text> dessa vez, mas contine se esforçando e não desista!</TextStatic>

                    <Image
                        source={FeelingBad}
                    />

                    <Button
                        style={{
                            marginTop: 'auto',
                            width: '60%'
                        }}
                        title="Ir para a página Inicial"
                    />
                </>
            }



        </Container>
    )
}