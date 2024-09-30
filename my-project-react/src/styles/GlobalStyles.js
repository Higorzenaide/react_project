import styled, {createGlobalStyle} from 'styled-components';
import {primaryColor,primaryDarkColor} from '../config/color'

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    outline: none;
    box-sizing: border-box;
}

body{

    font-family:sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryDarkColor}
}

html,body, #root{
    height:100%;

}


button{
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
}

a{
    display: inline-flex; /* Flexbox aplicado ao link */
    align-items: center;  /* Centraliza verticalmente ícone e texto */
    justify-content: center; /* Opcional: centraliza horizontalmente */
    gap: 3px; /* Espaço entre o ícone e o texto */
    text-decoration: none; /* Remove sublinhado padrão */
    padding: 5px 10px; /* Ajusta o espaçamento ao redor do link */
    color: ${primaryColor};
}

ul{
    list-style: none;
}

`;


export const Container = styled.section`
    max-width: 560px;
    width: 100%;  /* Permite que o container use 100% da largura disponível em telas menores */
    background: #fff;
    margin: 30px auto;
    padding: 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.1);

    @media (max-width: 768px) {
        padding: 20px;  /* Diminui o padding em telas menores */
        margin: 20px auto;  /* Diminui a margem */
    }

    @media (max-width: 480px) {
        padding: 15px;  /* Padding ainda menor para telas muito pequenas */
        margin: 15px auto;
        border-radius: 2px;  /* Bordas menores para dispositivos móveis */
    }
`;