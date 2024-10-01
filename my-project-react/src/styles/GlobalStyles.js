import 'react-toastify/dist/ReactToastify.css'
import styled, {createGlobalStyle} from 'styled-components';
import {primaryColor,primaryDarkColor, errorColor, sucessColor} from '../config/color'


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

/* Seu CSS customizado */
.Toastify__toast {
   margin-top:-10px;

    /* Estilo específico para telas pequenas */
    @media (max-width: 500px) {
        .Toastify__toast {
            max-width: 20px !important; /* Corrigido com espaço antes de !important */
            width: auto; /* Isso pode ajudar a garantir que o toast não ultrapasse o max-width */
        }
    }
    }
.Toastify__toast-container{
    /* Estilo específico para telas pequenas */
    @media (max-width: 500px) {
        .Toastify__toast {
            max-width: 600px !important; /* Corrigido com espaço antes de !important */
            margin-right:100px;
            margin-left:-30px !important;

        }
    }

    /* Para telas menores que 480px */
    @media (max-width: 480px) {
        .Toastify__toast {
            max-width: 300px !important; /* Corrigido com espaço antes de !important */
                width: auto; /* Isso pode ajudar a garantir que o toast não ultrapasse o max-width */
                justify-content:center !important;
                align-items:center !important;
                margin-left:70px !important;
                margin-top: 5px !important;
            }

    }
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