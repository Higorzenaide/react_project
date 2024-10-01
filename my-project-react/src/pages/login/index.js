import React,{ useEffect } from 'react'
import {toast} from 'react-toastify'
import {Container} from '../../styles/GlobalStyles'
import {Title} from './styled'


export default function Login(){
    const notify = () => toast.success("Mensagem de sucesso!");

    useEffect(() => {
        notify(); // Chama a função de notificação
    }, []); 

    return (
        <Container>
            <Title $isRed={true}> Login </Title>
            <p>Lorem ipsum dolor.sit amet</p>
            <button type='button'>Example</button>
        </Container>
    )
}