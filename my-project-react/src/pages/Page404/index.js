import React from "react";
import {Container} from '../../styles/GlobalStyles'
import {Title,Subtitle,HomeLink,Icon} from './styled'

export default function Page404() {
    return (
        <Container>
            <Title><Icon/>404 - Página Não Encontrada</Title>
            <Subtitle>Desculpe, a página que você está procurando não existe.</Subtitle>
            <HomeLink to="/">Página Inicial</HomeLink>
        </Container>
    );
}