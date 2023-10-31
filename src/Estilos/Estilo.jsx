import styled from "styled-components";

export const lightTheme={
    corFundo: '#009F9A',
    corTexto: 'black',
    corTitulo: 'black'
}

export const darkTheme={
    corFundo: '#002523',
    corTexto: 'white',
    corTitulo: '#0ABAB5'
}

export const Container = styled.div`
    padding: 10px;
    border:none;
    background-color: #006A67;
    color: white;
    margin: 10px
`


export const TitlePage = styled.h1`
    color:${props=> props.theme.corTitulo}
    font-size: 20px;
`
export const Button = styled.button`
    padding:10px;
    border:none;
    background-color:#009F9A;
    color: white;
    margin: 10px
`
