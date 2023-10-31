import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home';
import Cep from './pages/cep';
import Fontes from './pages/fontes';
import Sobre from './pages/sobre';
import { lightTheme, darkTheme, Button, Container } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light' ? 'dark' : 'light')
  }
  return (
    <>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <h1>Tecnologias emergentes</h1>
    <Button onClick={mudarTheme}>Mudar Theme</Button>
    <hr />
    <Container>  
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/cep' element={<Cep />} />
                          <Route path='/fontes' element={<Fontes />} />
                    </Routes>
                  </BrowserRouter>     
    </Container>
    </ThemeProvider>
    </>
  )
}

export default App
