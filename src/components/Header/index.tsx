import { Container, Logo, PerfilImage } from "./styles";

import logoImg from '@assets/logo.png'
import perfilImg from '@assets/perfil.png'

export function Header() {
    return (
        <Container>
            <Logo
                source={logoImg}
            />
            <PerfilImage
                source={perfilImg}
            />
        </Container>
    )
}