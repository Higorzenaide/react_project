import styled from 'styled-components'
import { Link } from "react-router-dom";
import { MdMoodBad } from "react-icons/md";

export const Title = styled.h1`
    font-size: 2.5rem;
    text-align:center;
    margin-bottom: 20px;
    color: #ff4d4d;
    white-space: normal;  /* Permitir que o texto quebre em uma nova linha se necessário */
    display: inline-flex;;
    text-align: left; 
    

    @media (max-width: 768px) {
        font-size: 2.5rem;  /* Reduzir o tamanho da fonte em telas pequenas */
        text-align: left;  /* Centralizar o texto em telas pequenas, se desejado */
    }
`;

export const Icon = styled(MdMoodBad)`
    margin: 0 10px 0 30px
`;

export const Subtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 20px;
`;

export const HomeLink = styled(Link)`
    font-size: 1rem;
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;
    max-width: 200px;
    margin: 0 auto;
    display: flex;

    &:hover {
        background-color: #0056b3;
    }
`;