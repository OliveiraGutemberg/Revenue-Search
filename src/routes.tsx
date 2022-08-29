// Precisamos instalar o react-router-dom para podermos criar rotas get aqui no react.
// Após a instalação iremos importar 4 componentes do modulo acima: 
    // BrouwserRoute - É um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes, por conta disso ele ficará em volta dos componentes <Route>.
    // Routes - Nos permite carregar somente um componente por pagina
    // Route - Componente que associa a rota ao componente. Nele temos três parâmetros: component, path e exact.
    // Link - Fuciona como a tag <a> para "lincar" algum elemento.
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {Receitas} from './pages/Receitas';
import "./styles/global.css"

// Função responsavel por indicar a rota de cada componente
export function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/receitas' element={<Receitas/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}