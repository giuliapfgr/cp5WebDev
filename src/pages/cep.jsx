import { TitlePage } from "../Estilos/Estilo";
import Menu from "../Componentes/menu";
import axios from "axios";
import React, {useState} from 'react';

function Cep(){
    const[cep, setCep]= useState('')
    const[data, setData]= useState({})
    const[error, setError] = useState(null)

    function handleCepChange(e){
        setCep(e.target.value)
    }
    function pesquisarCep(){
        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            .then(
            function(response){
                if(response.data && !response.data.erro){
                    setData(response.data)
                    setError(null)
                }
                else{
                    setData({})
                    setError('CEP NÃO ENCONTRADO!')
                }
            })
            .catch(function (error){
                setData({})
                setError('CEP NÃO ENCONTRADO!')
            })
    }
return(
    <>
    <Menu />
    <TitlePage> Pesquisa por CEP </TitlePage>

    <input type="text" placeholder="XXXXXX-XX" value={cep} onChange={handleCepChange} />
    <button onClick={pesquisarCep}> Pesquisar </button>
    {error && <p>{error}</p>}

    {data.cep &&(
        <div>
            <p>CEP: {data.cep} </p>
            <p>Logradouro: {data.logradouro} </p>
            <p>Complemento: {data.complemento} </p>
            <p>Bairro: {data.bairro} </p>
            <p>UF: {data.uf} </p>
            <p>DDD: {data.ddd} </p>
        </div>
    )}
    </>
)
}