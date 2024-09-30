import React from 'react'
import {Container} from '../../styles/GlobalStyles'
import {Title} from './styled'


export default function Login(){
    return (
        <Container>
            <Title $isRed={true}> Login </Title>
            <p>Lorem ipsum dolor.sit amet</p>
            <button type='button'>Example</button>
        </Container>
    )
}